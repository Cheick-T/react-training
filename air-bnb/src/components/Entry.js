import markeur from '../images/mark.png';

function Entry(propos) {
    return (
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image'
                src={propos.img.src} alt={propos.img.altText} />
            </div>  
            
           
            <div>
                <img className = "markeur" src={markeur} alt="Markeur" />
                <span>{propos.country}</span>
                <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View on Google Maps</a>
                <h1>{propos.title}</h1>
                <p>{propos.date}</p>
                <p>
                    {propos.description}
                </p>  
            </div>
            
        </article>

    )
}

export default Entry;