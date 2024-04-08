$(".headerMenu").click(function(){
    $(".sideBar").toggle(1000);
    $(".headerNav").toggleClass("header-new");
    $(".contentArea").toggleClass("newArea");
    $(".searchGlass").toggleClass("searchGlass-new");
});