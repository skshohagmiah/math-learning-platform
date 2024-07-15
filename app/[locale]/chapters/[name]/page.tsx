import NumberTheoryLessons from "../_components/NumberTheory";



const ChapterPage = ({params}:{params:{name:string}}) => {

  let name = params.name
  
  switch(name){
    case 'number-theory':
      return <NumberTheoryLessons/>
    // case 'arithmetic':
    //   return <Arithmetic/>
    // case 'algebra-basics':
    //   return <AlgebraBasics/>
    // case 'geometry-basics':
    //   return <GeometryBasics/>
    // case 'calculus':
    //   return <Calculus/>
    case "default":
      return <div>Working on this page</div>
  }

};

export default ChapterPage;