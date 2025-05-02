const paths = [
    "src/components/Button.js",
    "src/components/Input.js",
    "src/utils/helpers.js",
    "src/index.js",
    "tests/utils/helpers.test.js"
  ];
  

  const testPaths = (paths)=>{
    return paths.reduce((acc,curr)=>{
        const parts = curr.split("/");
        const fileName = parts.pop();
        const dir = parts.join("/")

        if(!acc[dir]){
            acc[dir] =[]
        }
        acc[dir].push(fileName)
        return acc;
    },{})
  }

  console.log(testPaths(paths))