import React from 'react'

export default function Blog() {
  return (
        <div className="container blog">
            <div className="row">
              <div className="col-md-6">
                <h1 className='text-capitalize'>List of Hackhaton and Tech events</h1>
                <p className="text-uppercase">1. <a href='https://hackaholics.wemabank.com/'>WEMA BANK HACKATHON LINK </a> </p>
                <p className="text-uppercase">2. <a href='https://dfslab.net/stellar-blockchain-bootcamp/'>DFS BLOCKCHAIN BOOTCAMP </a> </p>
                <p className="text-uppercase">3. <a href='https://forms.office.com/Pages/ResponsePage.aspx?id=2wYhaHuaNUu5oIhHM4XWz4xd7eFcg_pOhOV9L5YSnHtUQVZERzBJRzNJNEQ1RzlaNUY2NjNZTUpFMy4u'>TECH4DEV LINK </a> </p>
                <p className="text-uppercase">4. <a href='https://www.microsoft.com/en-us/leap/iwd2022/register/'>MICROSOFT INTERNATIONAL WOMEN’S DAY HACKATHON 2022 </a> </p>
                </div>

                <div className="col-md-6">
                  <img src="https://eventsbase.co.uk/wp-content/uploads/2020/09/event-tech-image.jpg" alt="Tech Event" className='img-fluid' />
                  </div>
            </div>
          </div>
  )
}
