import { newSpecPage } from '@stencil/core/testing';
import { JmSideDrawer } from '../jm-side-drawer';

describe('jm-side-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmSideDrawer],
      html: `<jm-side-drawer></jm-side-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-side-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-side-drawer>
    `);
  });
});
