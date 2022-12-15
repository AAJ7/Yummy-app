

$("#options i ").on("click",function()
{
    let W = $(".SideLeft").innerWidth();
    if($("#options").css("left") === "0px")
    {
        $("#options").animate({"left": `-${W}px`}, 1000);
    }
    else
    {
        $("#options").animate({"left": `0px`}, 1000);
    }
});
