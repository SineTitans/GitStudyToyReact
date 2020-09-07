import { createElement, Component, Fragment, render } from "./toy-react";

class MyComponent extends Component {
    render() {
        let { title, ...props } = this.props;
        return <div {...props}>
            <h1>{title}</h1>
            {this.children}
        </div>;
    }
}

render(<MyComponent id="a" title="my component">
    <Fragment key="alpha">
        <div>abc</div>
        <div>def</div>
        <div>ghi</div>
    </Fragment>
    <>
        <p>#66ccff</p>
        <p>#66ccff</p>
    </>
</MyComponent>, document.body);