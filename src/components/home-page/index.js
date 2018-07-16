import HomePageCtrl from './home-page.controller';
import HomePageTemplate from './home-page.template.html';

export default {
    template: HomePageTemplate,
    controller: HomePageCtrl,
    bindings: {
      handleAdd: '=',
      todos: '='  
    },
}