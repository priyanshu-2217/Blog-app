import React from 'react'

export const Home = () => {
  return (
  <main className='my-5'>
    <div className='container shadow-lg'>
        <section className='text-center'>
            <h2 className='mb-5 my-3'>
                <strong>Latest posts</strong>
            </h2>
            <div className='row'>
                <div className='col-lg-4 col-md-12 mb-4'>
                    <div className='card'>
                        <div className='bg-image hover-overlay ripple'
                        data-mdb-ripple-color="Light">
                            <img src='https://picsum.photos/200/300' className='w-100
                            ' />
                            <a href='#'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 182,
                                43, 0.9)' }}
                                /></div></a>
                                <div className='card-body'>
                                    <h5 className='card-title'>Post 1</h5>
                                    <p className='card-text'>This is a longer card with the
                                        same width as the screen, and an image over its full height and
                                        width.</p>
                                        <button className='btn btn-primary'>Read more</button>
                                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </main>
  )
}
