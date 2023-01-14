//windows document
//load網頁全部載入完在做 'load'
window.addEventListener('load',function(){
   const p1= document.getElementById('title')
    p1.innerText="我好強"
})
    const b1=this.document.getElementById('button') 
    b1.addEventListener('click',function(){
        console.log("chicken")
    })
    const i1=document.getElementById('input')
    i1.addEventListener('keyup',function(e){
       console.log('E:',e.target.value)
   
    })
