import React from 'react'
import Poster from '../../images/Poster.jpg'

const SearchContent = ({ data }) => {
    console.log(data)
    return (
        <div className='search-feed'>
            {data.map((ele, index) => (
                <div key={index} className='single-card'>
                    <div className="card">

                        <div className="boxOne">

                            <div className="imageBox">
                                <img src={ele.show.image && ele.show.image.medium || Poster} alt='poster' className="poster" />
                            </div>

                            <div className="side-content">
                                <div className="details">
                                    <h2>{ele.show.name}</h2>
                                    <p>
                                        <strong>Type:</strong> {ele.show.type}
                                    </p>
                                    <p>
                                        <strong>Language:</strong> {ele.show.language}
                                    </p>
                                    <p>
                                        <strong>Genres:</strong> {ele.show.genres.join(', ')}
                                    </p>
                                    <p>
                                        <strong>Status:</strong> {ele.show.status}
                                    </p>
                                    <p>
                                        <strong>Schedule:</strong> {ele.show.schedule.days.join(', ')} at {ele.show.schedule.time}
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='boxtwo'>
                            {ele.show.summary && (
                                <div dangerouslySetInnerHTML={{ __html: ele.show.summary }} />
                            )}
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchContent
