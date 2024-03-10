import React, { useState,useEffect, useRef } from 'react'
import LightOn from './assets/light-bulb-on.png'
import LightOff from './assets/light-bulb-off.png'
function SmartLampu() {

const ref = useRef(null)
const scrollTo = (ref)=>{
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: 'smooth'
  })
}

//initial value
const [status,setStatus] = useState(0)
const [desc,setDesc] = useState("")
const [image,setImage] = useState("")

useEffect(()=>{
  scrollTo(ref.current)
  //ref.current?.focus();
    if (status % 2 == 0) {
        setDesc("Mati")
        setImage(LightOff)
    } else {
        setDesc("Hidup")
        setImage(LightOn)
    }
},[status])

  return (
    <>
    <button onClick={()=>{
      scrollTo(ref.current)
    }}>Go to lamp</button>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eligendi, ab molestias fuga totam blanditiis provident fugiat nulla, doloribus repellat dolor? Officiis vel nisi magnam reiciendis facere quasi debitis distinctio! Adipisci veniam, obcaecati distinctio ipsam possimus recusandae iure exercitationem facere molestiae. Officia perspiciatis nihil ipsum aut sint vel error dicta quibusdam veniam ad? Molestias at quisquam a aperiam, eaque provident repellat qui beatae in ipsam natus possimus porro voluptate laboriosam illum consectetur eius saepe cum! Error provident, odio blanditiis hic magnam, quia reiciendis libero maiores laudantium officiis perspiciatis rerum optio ad sunt tempora omnis. Molestias modi sapiente voluptatem doloribus! Dignissimos laudantium tempore natus et placeat. Doloremque vel eveniet voluptate natus eum minima culpa nisi labore sed necessitatibus non quam molestias, quia quaerat totam tenetur! Tenetur voluptas consequuntur laboriosam nobis eos ducimus quo rem, cum amet perferendis earum neque iste exercitationem itaque. Vitae vel rerum quibusdam adipisci eveniet totam voluptatem odit facere, velit perspiciatis minima reprehenderit libero odio officia alias nostrum necessitatibus neque eum magnam! Itaque, atque voluptate vitae quia blanditiis consequatur, quibusdam cum ab sit ipsam quas fuga, ad unde ipsa quae libero sapiente eum. Sequi ipsa recusandae et nesciunt soluta architecto quia nisi magnam tempora quo quibusdam, animi explicabo dolores nostrum error, modi illo doloremque mollitia? Repellat voluptas earum deleniti eligendi aliquam, dolor ducimus magni temporibus numquam animi sapiente ratione. Deserunt earum eligendi, quos ut natus a similique perferendis omnis dolorem eum asperiores iure, laudantium nostrum assumenda quod. Consequatur illum doloremque quibusdam atque eum labore, deserunt distinctio error, temporibus saepe ipsum possimus nemo dolore quis nisi, nulla qui consectetur exercitationem. Saepe voluptate doloremque reiciendis, impedit magni at quos dolore sapiente error. Veniam impedit nesciunt reiciendis facilis, magnam inventore, unde molestiae illo deleniti ab possimus repellat itaque iure repudiandae quae eos? Nulla sapiente atque maxime quia aliquam architecto officia incidunt blanditiis suscipit saepe iste neque assumenda, laudantium soluta sunt commodi deserunt quidem sit quis minima voluptatum possimus ullam beatae totam. Soluta, delectus perferendis. Necessitatibus architecto perferendis hic distinctio, eveniet qui blanditiis minus laboriosam laudantium reprehenderit maxime ea cumque explicabo incidunt tempore, dolore dolorem nesciunt veritatis! Exercitationem repellendus expedita voluptates veniam esse? Vel magnam fuga iusto suscipit modi temporibus fugit sequi porro ipsum vero, atque quod maiores asperiores ea, deleniti dolor? Dolores nihil fuga doloremque exercitationem ipsum adipisci modi porro commodi! Porro, voluptatum magnam? Non quas quod incidunt, commodi quisquam optio, vitae at corrupti vel facilis reiciendis soluta error provident ea quaerat enim alias accusamus molestias! Ipsum voluptates repellendus magni laborum aliquid saepe perspiciatis, minus accusantium rem adipisci, exercitationem officia ratione explicabo suscipit aperiam fugiat minima placeat beatae nihil ut. Vel, aliquid. Architecto enim non odio nulla ipsum odit repudiandae praesentium recusandae quasi, at dignissimos molestias blanditiis veritatis veniam tenetur deleniti. Ea at sunt laborum dicta nisi porro harum tenetur architecto ipsa maxime mollitia, aliquid earum vel dolor! Iure mollitia non quidem! Nam debitis eos fuga? Voluptas aut officia eveniet modi omnis rem corporis nam totam tempora, odio fugit beatae distinctio, fugiat animi corrupti itaque excepturi. Voluptas fugit, nemo natus totam cupiditate ea rem dolor inventore praesentium. Quas sequi nisi, aspernatur in nam dicta. Architecto obcaecati perferendis fugiat laudantium dolore facilis aut commodi excepturi, eaque ex dignissimos repudiandae temporibus reprehenderit dicta cupiditate? Ex aperiam dolores consectetur nostrum consequuntur voluptatum dicta. Voluptate aliquid velit voluptas cum ratione asperiores dolore assumenda ipsum consequatur vero molestias omnis dicta esse similique, exercitationem est excepturi autem! Odio natus perferendis nostrum quis. Labore vel corrupti ipsam aspernatur! A vitae ab dolore eveniet consequatur. Cupiditate impedit quam sapiente consequuntur veritatis nam magnam et facilis itaque ea a qui commodi nesciunt, odit velit sit neque recusandae, obcaecati non tempora alias repellat distinctio! Est, deserunt vel? Neque deleniti tempora a animi tenetur optio provident placeat. Nostrum temporibus animi cupiditate. Dolore sed fuga quam corporis, suscipit quas atque commodi consequatur dicta. Veniam expedita, magnam iste quibusdam reiciendis eius dolores, odit ut sapiente illo adipisci possimus nihil quod pariatur, libero ipsa ipsum minima vitae quia. Atque aliquam porro incidunt corrupti repellendus pariatur ratione velit sed cum inventore magnam dicta at voluptatibus, quas earum nisi quae praesentium dignissimos possimus. Ut, rerum iusto? Laborum accusantium delectus blanditiis ipsam, ad explicabo inventore nobis laboriosam harum minus libero vitae soluta,</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellendus dolores, doloremque dolorum nobis vero nihil vel a exercitationem, assumenda voluptas iure distinctio placeat consequatur natus repellat suscipit. Expedita, aperiam! Expedita error asperiores incidunt? Aut et dicta blanditiis aspernatur? Tempora commodi impedit, laborum repellendus, aliquid rerum, neque consectetur corrupti facilis odio alias hic praesentium quo vero perferendis sit. Aperiam, cupiditate quod cum ipsam animi totam eum voluptates sapiente, fuga quasi alias distinctio, saepe veritatis placeat atque praesentium deleniti. Qui quibusdam magnam vitae! Voluptatum culpa perspiciatis quas vitae dolores reprehenderit quaerat, porro ex minima corporis modi incidunt quasi cum et magnam officiis eveniet sed expedita fuga, consequatur quae eaque ducimus repellat. Reiciendis beatae voluptates exercitationem. Maxime voluptatum molestiae temporibus. Magni temporibus id, dolor quam animi nisi. Voluptate aliquam amet, molestias et recusandae, adipisci assumenda perspiciatis officia cupiditate voluptas cumque id inventore nisi illum necessitatibus quibusdam blanditiis possimus praesentium? Accusantium deleniti aliquam, temporibus rem nesciunt officiis corrupti possimus, recusandae quod et necessitatibus vel fugiat laboriosam voluptatum doloremque architecto adipisci similique! Quae culpa amet aliquid voluptatibus modi aliquam, optio incidunt consequuntur, fugiat autem molestiae, laboriosam quos consectetur voluptatum facilis repellat tenetur dicta natus! Dolores dolore vel dicta obcaecati nihil dignissimos mollitia qui atque!</p>
    <img src={image} alt="" width={"100px"}/>
    <h1>{desc}</h1>
    <button onClick={()=>{setStatus((previous)=>previous+1)}} ref={ref}>Click</button>
    <br />
    <br />
    <input ref={ref} type="text" />
    <br />
    <br />
    </>
  )
} 

export default SmartLampu