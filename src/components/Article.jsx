import React from 'react'
import './article.css';

const Article = () => {
    return (
        <div className='firstdiv' >
            <div className='wraer' >
                <h2 className='recent' >Recent articles.</h2>

                <div className='blog' >


                    {/* 22222222222222222 */}
                    <div className='blogread' >
                        <article className='read1' >
                            <a className='blog-header' href="https://dev.to/mugybro/integrating-firebase-with-react-part-1-51ma" style={{ backgroundImage: "url(' https://s3.amazonaws.com/snd-store/a/26553114/02_02_18_508408464_aab_560x292.jpg  ') " }}>
                                <div className='overlay' >
                                    <div className='texto' >Read Articles</div>
                                </div>
                            </a>

                            <div className='blog-content' >
                                <span className='meta' >Published on 18th Dec., 2020</span>
                                <h2 className='cont2' >
                                    <a style={{ color: 'black' }} href="https://mugy.codes/">Work in Progress</a></h2>
                                <div className='texxt' >

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde fugiat, id doloremque sit velit iure impedit ducimus. Id officia illum quo cum nihil tenetur expedita, alias quibusdam iste rerum.

                                </div>

                            </div>

                        </article>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Article
