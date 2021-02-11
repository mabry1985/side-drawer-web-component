import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jm-side-drawer',
  styleUrl: 'jm-side-drawer.css',
  shadow: true,
})
export class JmSideDrawer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
