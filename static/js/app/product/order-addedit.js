$(function() {

    var code = getQueryString('code');

    var fields = [{
        field: 'applyUser',
        title: '下单人编号',
        type: 'select',
        listCode: '805055',
        params: {
            kind: "f1",
            status: "0",
            updater: ""
        },
        keyName: 'userId',
        valueName: '{{nickname.DATA}}--{{mobile.DATA}}',
        required: true
    }, {
        field: 'applyName',
        title: '下单人姓名',
        required: true,
        maxlength: 32
    }, {
        field: 'applyMobile',
        title: '下单人手机号',
        mobile: true,
        required: true,
    }, {
        field: 'ltDatetime',
        title: '量体时间',
        required: true,
        type: 'date'
    }, {
        field: 'Province1',
        title: '量体地址',
        type: "citySelect",
        required: true
    }, {
        title: "量体详细地址",
        field: "ltAddress",
        maxlength: 64,
        required: true,
    }, {
        field: 'applyNote',
        title: '量体嘱咐',
        maxlength: 250
    }];

    buildDetail({
        fields: fields,
        code: code,
        addCode: '620200',
        beforeSubmit: function(data) {
            // if (data.province == data.city && data.city == data.area) {
            //     data.city = "";
            //     data.area = "";
            // } else if (data.province == data.city && data.city != data.area) {
            //     data.city = data.area;
            // }
            data.ltProvince = data.province;
            data.ltCity = data.city;
            data.ltArea = data.area;
            return data
        }
    });

});