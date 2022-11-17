import React from 'react'
import MermaidReact from 'mermaid-react'
 
const t = `flowchart LR;
    TBSE(To be a software engineer)-->SEM(Software Enginnering Methodology)
    TBSE-->P(Programming)
    TBSE-->CS(Computer Science)

    SEM-->CS130(UCLA CS130):::study

    CS-->CN(Computer Network)
    CS-->DSA(Data Structure and Algorithms)
    CS-->CO(Computer Organization)
    CS-->OS(Operating System)
    CS-->LC(Languages and Compilers)
    CS-->M(Math)
    CS-->DB(Databases)
    CS-->AIML(Machine Learning)

    DSA-->MLN(My LeetCode record on Notion):::study
    DSA-->MDSAN(My DSA Notes on Notion):::study
    CO-->CSAPP(CSAPP):::study
    

    P-->L(Languages)
    L-->CPP(C++)
    L-->Java(Java)




    classDef default fill:#6d99a0,color:white;
    classDef study fill:#9bc1c1;
    classDef ongoing fill:#9bc1c1, stroke:#3d6069, stroke-width:3px;
    
    class MLN,MDSAN,CS130 ongoing;


    click MLN href "https://snow-eocursor-c7e.notion.site/LeetCode-Practices-4d07c40c930c48508c3f733787ee30d4"
    click MDSAN href "https://snow-eocursor-c7e.notion.site/Notes-on-Data-Structures-and-Algorithms-718f5eb216704ce29c49f57c8bf9c10e"
`;
 
    // click A callback "Tooltip for a callback"
    // click B "https://www.github.com" "This is a tooltip for a link"
    // click A call callback() "Tooltip for a callback"

function CSmindmap(){
  return (
    <div className='mindmap'>
      <div className="cs-mindmap-title">Growing the CS tree along my way... See the leaves and blossoms flourish as I learn.</div>
      <MermaidReact id='test' mmd={t} onClick={() => console.log('test Click')} onRender={svg => console.log('render content', svg)} />
    </div>
  )
}
 
export default CSmindmap;