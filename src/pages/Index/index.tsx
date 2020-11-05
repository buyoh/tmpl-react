import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../stores';
import * as FoobarActions from '../../stores/foobar/actions';
// import '../style/style.scss';

//

type Props = {};

type State = {};

//

type StateProps = {
  yourValue: number;
};

type DispatchProps = {
  increment: () => void;
  decrement: () => void;
};

type CombinedProps = Props & StateProps & DispatchProps;

//

function mapStateToProps(state: RootState): StateProps {
  return {
    yourValue: state.foobar.value,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    increment: () => dispatch(FoobarActions.increment()),
    decrement: () => dispatch(FoobarActions.decrement()),
  };
}

//

export class Index extends React.Component<CombinedProps, State> {
  constructor(props: CombinedProps) {
    super(props);
    this.state = { visibleArticle: null };
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>value = {this.props.yourValue}</h1>
        <div>
          <button onClick={() => this.props.increment()}>+1</button>
          <button onClick={() => this.props.decrement()}>-1</button>
        </div>
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps, Props, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Index);
