import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import LongDateTime from './LongDateTime';
import { i18nProviderWrapperFactory } from '../../common/i18nProviderWrapperFactory';

configure({ adapter: new Adapter() });

describe('LongDateTime', () => {
  const date = new Date('2017-10-13 00:54:55 -1100');
  const now = new Date('2017-10-28 00:00:00 -1100');
  const IntlDate = i18nProviderWrapperFactory(now)(LongDateTime);

  it('formats date', () => {
    const wrapper = mount(
      <IntlDate data={{ date, defaultValue: 'Default value' }} />
    );

    expect(toJson(wrapper.find('LongDateTime'))).toMatchSnapshot();
  });

  it('formats date with seconds', () => {
    const wrapper = mount(
      <IntlDate
        data={{
          date,
          defaultValue: 'Default value',
          seconds: true
        }}
      />
    );

    expect(toJson(wrapper.find('LongDateTime'))).toMatchSnapshot();
  });

  it('renders default value', () => {
    const wrapper = mount(
      <IntlDate data={{ date: null, defaultValue: 'Default value' }} />
    );

    expect(toJson(wrapper.find('LongDateTime'))).toMatchSnapshot();
  });
});
