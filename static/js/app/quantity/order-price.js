$(function() {
    var code = getQueryString('code');


    var priceList = {};
    reqApi({
        code: "620007",
        json: { updater: "" },
        sync: true
    }).then(function(data) {
        for (var i = 0; i < data.length; i++) {
            priceList[data[i].code] = moneyFormat(data[i].price);
        }
    });


    var fields = [{
            title: '订单号',
            field: 'code1',
            formatter: function(v, data) {
                return data.code
            },
            readonly: true
        }, {
            title: '状态',
            field: 'status',
            key: "order_status",
            formatter: Dict.getNameForList("order_status"),
            readonly: true
        },
        {
            title: '下单人',
            field: 'applyName',
            readonly: true
        }, {
            title: '联系方式',
            field: 'applyMobile',
            readonly: true
        }, {
            title: '量体地址',
            field: 'province1',
            formatter: function(v, data) {
                var result = (data.ltProvince || "") + (data.ltCity || "") + (data.ltArea || "") + (data.ltAddress || "");
                return result || "-";
            },
            readonly: true
        }, {
            title: '量体时间',
            field: 'ltDatetime',
            formatter: dateFormat,
            readonly: true
        }, {
            title: "量体嘱咐",
            field: "applyNote",
            readonly: true
        }, {
            title: "价格",
            field: "modelCode",
            type: "select",
            data: priceList,
            required: true
        }, {
            field: "quantity",
            title: '数量',
            type: "hidden",
            value: "1",
            required: true
        }
    ];

    var options = {
        fields: fields,
        code: code,
        detailCode: '620221'
    };

    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['orderCode'] = code;
                data['modelCode'] = $("#modelCode").val();
                data["quantity"] = $("#quantity").val();
                reqApi({
                    code: "620203",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    buildDetail(options);
});