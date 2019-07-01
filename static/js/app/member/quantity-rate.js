$(function() {
    var code = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        title: "修改分成比例",
        field: "divRate",
        required: true,

    }];

    var options = {
        fields: fields,
        code: code,
        code: {
            userId: code
        },
        addCode: '805042',
        editCode: "805182",
        detailCode: "805056",
        view: view,
    };
    options.buttons = [{
        title: '保存',
        handler: function() {
            var data = {};
            data['userId'] = code;
            data['divRate'] = $("#divRate").val();
            reqApi({
                code: "805184",
                json: data
            }).done(function() {
                sucDetail();
            });
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);
});