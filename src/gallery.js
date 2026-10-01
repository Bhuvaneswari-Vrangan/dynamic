function Hero()
{
return(
<Hero>
<div className ="Hero"></div>
<a href="index.js">Dynamic Image Gallery</a>
</Hero>
)
}

function Masonry()
{
  return (
    <div className="Masonry" id="gallery">
      <div className="item"><img src={two} alt=""></img></div>
      <div className="item"><img src={three} alt=""></img></div>
      <div className="item tall"><img src={four} alt=""></img></div>
      <div className="item"><img src={five} alt=""></img></div>
      <div className="item tall"><img src={six} alt=""></img></div>
      <div className="item small"><img src={seven} alt=""></img></div>
      <div className="item"><img src={eight} alt=""></img></div>
      <div className="item small"><img src={nine} alt=""></img></div>
      <div className="item tall"><img src={ten} alt=""></img></div>
      <div className="item"><img src={eleven} alt=""></img></div>
      <div className="item"><img src={twelve} alt=""></img></div>
      <div className="item tall"><img src={thirteen} alt=""></img></div>
      <div className="item"><img src={fourteen} alt=""></img></div>
      <div className="item"><img src={fifteen} alt=""></img></div>
      <div className="item"><img src={sixteen} alt=""></img></div>
      <div className="item tall"><img src={seventeen} alt=""></img></div>
    </div>
   )
}
root.render(
    <div>
          <Masonry />
          <Hero />
  </div>
)
  