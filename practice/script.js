// const body=document.body;
// const div=document.createElement('div');
// div.innerText='Hello World'
// body.appendChild(div);

const input=document.getElementById("input-value");
const body=document.body;
input.addEventListener("input",(a)=>{
    const data=a.target.value;
    body.append(data)
})

// body.remove();