import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Form/Input Date',
  parameters: { docs: { iframeHeight: 400 } }
};

export const Drupal = (args) => ({
  component: TwigContainerComponent,
  props: args
});
Drupal.args = { 
    component: 'form-input-date',
    class: '',
    label: 'Label',
    labelClass: '',
    labelExtraAttribute: '',
    labelTooltipTxt: '',
    inputId: '',
};