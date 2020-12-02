exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
    {
      swapi {
        listNotes {
            id
            recepientName
             message
             senderName
             flavourTop
             flavourMiddle
             flavourBottom
             lollyPath
  
        }
      }
    }
    `)
  
    console.log("data from graphql source",data)
  
    data.swapi.listNotes.forEach(d => {
      actions.createPage({
        path: `${d.lollyPath}`,
        component: require.resolve(`./src/templates/dynamic-page.js`),
        context: {
          path: d.lollyPath,
          sender: d.senderName,
          recepient: d.recepientName,
          message: d.message,
          topColor: d.flavourTop,
          medColor: d.flavourMiddle,
          bottomColor: d.flavourBottom,
        },
      })
    })
  
  
    
  }