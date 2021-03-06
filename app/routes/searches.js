import Route from '@ember/routing/route';

export default Route.extend({
queryParams:{
  search: {
    refreshModel: true
  }
},

beforeModel(transition){
  let paramsExist = Object.keys(transition.queryParams).toString();
  if(!paramsExist.length  || paramsExist === undefined){
    this.transitionTo("application");
  }
},
model(params){
  if (!params.search.length ||  params.search === undefined) {
    return null;
  }
  else {
      return  this.store.query("tax-form-due-date", params);
  }
},
setupController(controller,model, params){
 this._super(...arguments);
 controller.set("keywordSearches",params.queryParams.search);
},

});
