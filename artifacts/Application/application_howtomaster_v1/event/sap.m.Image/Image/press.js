// Get Binding Context

//get the multimodel and pass it as data
const ctx = oEvent.oSource.getBindingContext("MultiModel");
const data = ctx.getObject();

//set the model
modelMultiModelDetails.setData(data);

oApp.to(PageTutorial)

/*
// Get single field
const value = context.getProperty("title");
console.log(value)

oApp.to(PageTutorial)
*/
