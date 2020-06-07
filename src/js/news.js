/* 这个是标签云的生成js代码 */
var word_array = [
    { text: "蜜桃臀", weight: 9, link: "http://baidu.com" },
    { text: "骨感", weight: 8, link: "http://jquery.com/" },
    { text: "女神", weight: 6, html: { title: "I can haz any html attribute" } },
    { text: "极品", weight: 10 },
    { text: "美腿", weight: 9 },
    { text: "波涛胸涌", weight: 9 },
    { text: "人间胸器", weight: 4 },
    { text: "波涛胸涌", weight: 5 },
    { text: "娇小萝莉", weight: 7 },
    { text: "童颜巨乳", weight: 10 },
    { text: "肉感", weight: 6 },
    { text: "白嫩", weight: 5 },
    { text: "小麦色", weight: 3 },
    { text: "香肩", weight: 9 },
    { text: "玉足", weight: 5 },
    { text: "尤物", weight: 6 },
    { text: "美臀", weight: 9 },

    // ...as many words as you want
];

$(function() {
    // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
    $("#hot_tags").jQCloud(word_array);

});