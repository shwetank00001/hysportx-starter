import React from 'react'
import { Card, CardTitle } from 'reactstrap'

function AboutMe() {
    const data =[
        {text :'This space is for tesng the area about the maer for about me, This space is for tesng the area about the maer for about me'},
        {text :'This space is for tesng the area about the maer for about me, This space is for tesng the area about the maer for about me'},
        {text :'This space is for tesng the area about the maer for about me, This space is for tesng the area about the maer for about me'},
        {text :'This space is for tesng the area about the maer for about me, This space is for tesng the area about the maer for about me'},
        {text :'This space is for tesng the area about the maer for about me, This space is for tesng the area about the maer for about me'},
    ]
  return (
    <Card>
        <CardTitle className='text-primary'>About Me</CardTitle>
        <div className='mt-1 font-size-10'>

        {data.map((i)=>
        <p key={i}>{i.text}</p>
        )}
        </div>
    </Card>
  )
}

export default AboutMe