

const About = () => {
  return (
    <section id="about">
      <br/>
      <h2>About</h2>
      <img
      class="about__avatar"
      width={250}
      height={250}
      style={{ borderRadius: "90%", boxShadow: "0.1rem 0.1rem 0.4rem 0.1rem gray" , objectFit: "cover", }}
      src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
      loading="lazy"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit sequi eius architecto, est velit cupiditate ad officia libero perferendis fuga. Officia magnam facilis quam quia rem natus harum vitae!
      </p>
      
    </section>
  )
}

export default About
