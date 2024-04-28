import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';

import sortWidgets from '../../common/utils/sortWidgets';

export default class StartBottomWidgetSection extends Component {
  view(): Mithril.Children {
    switch (app.current.data.routeName) {
      case 'index':
      case 'categories':
        return (
          <div className="AfruxWidgets-startBottom AfruxWidgets-WidgetSection">
            {sortWidgets(app.widgets.get('start_bottom')).map((widget) => widget.component.component({ state: widget.state }))}
          </div>
        );
      default:
        return null;
    }
  }
}