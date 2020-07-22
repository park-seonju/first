let id = document.querySelectorAll('#username');
let id_LS = localStorage.getItem("userInfo");
let getID = JSON.parse(id_LS);
for(var i=0; i < id.length; i++){
    id[i].innerText = getID.id;
}

let modal = document.querySelectorAll('#modal_open_btn');
    modal.click(function modal(){
        alert("dkssud");
        <div id="modal">
   <div class="modal_content">
       <h2>모달 창</h2>
       <p>모달 창 입니다.</p>
       <button type="button" id="modal_close_btn">모달 창 닫기</button>
   </div>
   <div class="modal_layer"></div>
</div>
});