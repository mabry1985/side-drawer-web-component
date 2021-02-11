import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'jm-side-drawer',
  styleUrl: 'jm-side-drawer.css',
  shadow: true,
})
export class JmSideDrawer {
  @Prop() title: string;

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
