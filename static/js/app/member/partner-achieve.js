$(function() {
    var userId = getQueryString('userId');
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: "订单编号",
        field: "code",
        search: true
    }, {
        title: "订单状态",
        field: "status",
        type: "select",
        key: "order_status",
        formatter: Dict.getNameForList("order_status"),
        search: true
    }, {
        field: 'applyName',
        title: '下单用户',
        search: true
    }, {
        title: '量体师',
        field: "ltName",
        search: true,
        visible: false
    }, {
        title: "联系方式",
        field: "applyMobile"
    }, {
        field: 'ltDatetime',
        title: '预约量体时间',
        formatter: dateTimeFormat
    }, {
        title: "量体师",
        field: "ltUser",
        formatter: function(v, data) {
            if (data.ltUserDO) {
                return data.ltUserDO.realName
            } else {
                return "-"
            }
        },
    }, {
        title: "订单金额",
        field: "amount",
        formatter: moneyFormat
    }, {
        title: "备注",
        field: "remark"
    }];
    buildList({
        // router: 'quantity_achieve',
        columns: columns,
        pageCode: '620220',
        searchParams: {
            toUser: userId
        }
    });
    $("#addBtn").remove();
    $("#edit2Btn").remove();
    $("#rockBtn").remove();
    $("#activeBtn").remove();
    $("#achieveBtn").remove();
    $("#accountBtn").remove();
    $("#ledgerBtn").remove();
});