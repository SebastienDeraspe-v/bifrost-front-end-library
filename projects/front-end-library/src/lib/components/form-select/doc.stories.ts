import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Form/Select'
};

export const Drupal = (args) => ({
  component: TwigContainerComponent,
  props: args
});
Drupal.args = { 
    component: 'form-select',
    dropdownItems: '',
    isStickyScrollSpyActive: '',
    class: '',
    buttonClass: '',
    dropdownId: '',
    labelClass: '',
    dropdownSelectedItem: '',
};

export const DrupalNative = (args) => ({
  component: TwigContainerComponent,
  props: args
});
DrupalNative.args = { 
    component: 'form-select',
    componentVariant: 'form-select-native',
    label: 'Label',
    labelClass: '',
    labelExtraAttribute: "title=Title",
    options: '',
    invalidMsg: 'This is an invalid error message',
    inputId: '',
    displayClass: '',
    selectClass: '',
    extraAttribute: '',
    placeholder: 'Placeholder',
};