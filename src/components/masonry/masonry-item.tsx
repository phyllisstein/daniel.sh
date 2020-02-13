import { Children, Component } from 'react'

export class MasonryItem extends Component {
  public render() {
    const child = Children.only(this.props.children)
    return child
  }
}
