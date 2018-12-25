import React from 'react'
import styled from 'styled-components'

let color={
    fill:"white",
    hover:"yellow"
}

export const Envelope = ()=>
    <IconStyle>
        <svg viewBox="0 0 483.3 483.3" className='envelope-icon'>
            <path d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"/>
            <path d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"/>
        </svg>
    </IconStyle>

export const Blogger = ()=>
    <IconStyle>
        <a href="https://www.blogger.com"> 
            <svg viewBox="0 0 430.117 430.118" className='blogger-icon'>
                <path id="Blogger" d="M292.938,430.118c74.995,0,135.91-61.092,136.335-135.672l0.844-109.816l-1.269-5.974l-3.604-7.516l-6.091-4.711c-7.915-6.21-48.015,0.42-58.81-9.388c-7.663-6.996-8.858-19.637-11.173-36.77c-4.308-33.18-7.028-34.912-12.228-46.162C318.07,34.166,266.84,4.149,231.646,0h-95.332C61.316,0,0,61.181,0,135.908v158.538c0,74.58,61.316,135.672,136.313,135.672H292.938z M138.05,111.032h75.581c14.431,0,26.117,11.714,26.117,25.951c0,14.179-11.687,25.989-26.117,25.989H138.05c-14.433,0-26.096-11.815-26.096-25.989C111.954,122.747,123.617,111.032,138.05,111.032z M111.954,292.439c0-14.234,11.663-25.86,26.096-25.86h153.577c14.337,0,25.977,11.626,25.977,25.86c0,14.043-11.64,25.855-25.977,25.855H138.05C123.617,318.294,111.954,306.482,111.954,292.439z"/>
            </svg>
        </a>
    </IconStyle>

export const Facebook = ()=>
    <IconStyle>
        <a href="https://www.facebook.com"> 
            <svg viewBox="0 0 96.124 96.123"  className='facebook-icon'>
                <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
            </svg>
        </a>
    </IconStyle>

export const Twitter = ()=>
    <IconStyle>
        <a href="https://www.twitter.com"> 
            <svg viewBox="0 0 612 612"  className='twitter-icon'>
                <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
            </svg>
        </a>
    </IconStyle>

export const Phone = ()=>
    <IconStyle>     
        <svg viewBox="0 0 578.106 578.106"  className='phone-icon'>
            <path  d="M577.83,456.128c1.225,9.385-1.635,17.545-8.568,24.48l-81.396,80.781c-3.672,4.08-8.465,7.551-14.381,10.404c-5.916,2.857-11.729,4.693-17.439,5.508c-0.408,0-1.635,0.105-3.676,0.309c-2.037,0.203-4.689,0.307-7.953,0.307c-7.754,0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584c-25.096-10.404-53.553-26.012-85.376-46.818c-31.823-20.805-65.688-49.367-101.592-85.68c-28.56-28.152-52.224-55.08-70.992-80.783c-18.768-25.705-33.864-49.471-45.288-71.299c-11.425-21.828-19.993-41.616-25.705-59.364S4.59,177.362,2.55,164.51s-2.856-22.95-2.448-30.294c0.408-7.344,0.612-11.424,0.612-12.24c0.816-5.712,2.652-11.526,5.508-17.442s6.324-10.71,10.404-14.382L98.022,8.756c5.712-5.712,12.24-8.568,19.584-8.568c5.304,0,9.996,1.53,14.076,4.59s7.548,6.834,10.404,11.322l65.484,124.236c3.672,6.528,4.692,13.668,3.06,21.42c-1.632,7.752-5.1,14.28-10.404,19.584l-29.988,29.988c-0.816,0.816-1.53,2.142-2.142,3.978s-0.918,3.366-0.918,4.59c1.632,8.568,5.304,18.36,11.016,29.376c4.896,9.792,12.444,21.726,22.644,35.802s24.684,30.293,43.452,48.653c18.36,18.77,34.68,33.354,48.96,43.76c14.277,10.4,26.215,18.053,35.803,22.949c9.588,4.896,16.932,7.854,22.031,8.871l7.648,1.531c0.816,0,2.145-0.307,3.979-0.918c1.836-0.613,3.162-1.326,3.979-2.143l34.883-35.496c7.348-6.527,15.912-9.791,25.705-9.791c6.938,0,12.443,1.223,16.523,3.672h0.611l118.115,69.768C571.098,441.238,576.197,447.968,577.83,456.128z"/>
        </svg>
    </IconStyle>

export const Youtube = ()=>
    <IconStyle>
        <a href="https://www.youtube.com"> 
            <svg viewBox="0 0 461.001 461.001"  className='youtube-icon'>
                <path  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
            </svg>
        </a>
    </IconStyle>

const IconStyle = styled.div`
.envelope-icon{
    height:20px;
    width:30px;
    fill:${color.fill};
}
.blogger-icon{
    height:20px;
    width:30px;
    fill:${color.fill};
}
.facebook-icon{
    height:20px;
    width:30px;
    fill:${color.fill};
}
.youtube-icon{
    height:20px;
    width:30px;
    fill:${color.fill};
}
.twitter-icon{
    height:20px;
    width:30px;
    fill:${color.fill};
}
.phone-icon{
    height:20px;
    width:30px;
    fill:${color.fill};
}
.twitter-icon:hover,.facebook-icon:hover,.blogger-icon:hover,.youtube-icon:hover{
   opacity:0.5;
   fill:${color.hover};
}
`