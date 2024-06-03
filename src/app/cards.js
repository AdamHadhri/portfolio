import Card from "./card";
import code from './images/coding.png'
import pencil from "./images/pencil.png"
import ux from "./images/ux.png" 

export default function Cards() {
  return (
    <>
      <div class="mt-8 flex flex-row gap-10 mx-10">
        <Card photo={code} title="Web development" para="Building responsive websites that look great  on all devices is essential in today's digital landscape. Our team works on developing user-friendly websites" />
        <Card photo={pencil} title="Graphic Design" para="Creating eye-catching designs that look good everywhere, like on screens or posters. We create designs that help brands stand out and get noticed."/>
        <Card photo={ux} title="Ui/Ux Design" para="Making easy-to-use interfaces that look good and are simple to understand. Our designs help people navigate websites and apps easily, keeping them engaged and happy."/>
      </div>
    </>
  );
}
