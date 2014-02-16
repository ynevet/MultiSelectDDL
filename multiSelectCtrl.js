function multiSelectCtrl($scope){
$('.selected-items-box').bind('click', function(e){
  e.stopPropagation();
  $('.multiple-select-wrapper .list').toggle('slideDown');
});
$('.multiple-select-wrapper .list').bind('click', function(e){
    e.stopPropagation();
});
$(document).bind('click', function(){
    $('.multiple-select-wrapper .list').slideUp();  
});
  
$scope.Airlines = [
  {selected: false, name:'SWISS', img:'http://s9.postimage.org/d9t33we17/Swiss.png'},
    {selected: false, name:'UNITED', img:'http://s9.postimage.org/ykqn85w5n/United.png'},
    {selected: false, name:'KLM', img:'http://s9.postimage.org/p7unhshsb/Klm.png'},
    {selected: false, name:'EL AL', img:'http://s18.postimage.org/oi8ndntud/image.gif'},
    {selected: false, name:'Ethiopian', img:'http://s9.postimage.org/hqlg2ks97/image.gif'}
];
$scope.getSelectedItemsOnly = function(item){
    return item.selected;
};
}
