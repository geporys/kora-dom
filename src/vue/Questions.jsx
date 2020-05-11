import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Expands from '../components/Expands';
import Chip from '@material-ui/core/Chip';

const useStyle = makeStyles({
  buttons: {
    marginTop: 16,
  },
  rightButton: {
    marginLeft: 16,
  },
  stepper: {
    backgroundColor: '#f2f3f7',
  },
});

const itemsLikeSteps = [
  [
    {
      question: 'Какая толщина стен необходима для дома с постоянным проживанием?',
      answer:
        'Для постоянного проживания в доме из профилированного бруса мы рекомендуем брус толщиной 195 мм. Такая толщина стен имеет хорошие показатели по теплопроводности и оптимально подходит для круглогодичного проживания в доме. Затраты на отопление в домах при такой толщине бруса будут минимальными.',
    },
    {
      question: 'Какая толщина стен подойдет для бани и гаража?',
      answer:
        'Для строительства бани оптимальный вариант — это профилированный брус сечением не менее 145 мм. Для гаражей можно использовать брус сечением 145мм. или 95мм. (в случае если гараж не отапливаемый).',
    },
    {
      question: 'Можно ли посмотреть производство?',
      answer:
        'Наше производство находится по адресу: Россия, Костромская область, г. Кострома, улица Галичская 140Б. Режим работы: пн.-пт. с 8 до 17.00, обед с 12 до 13.00, сб. с 8 до 12.00, воскресенье выходной. Тел.: 8-906-666-37-00 E-mail: s.ryzhakov@kora-dom.ru. Для осмотра производства необходимо согласовать время приезда. Мы будем рады видеть Вас у нас на производстве и постараемся ответить на все Ваши вопросы.',
    },
    {
      question: 'Из какой породы древесины Вы изготавливаете брус?',
      answer: 'Профилированный брус изготавливается из хвойных пород древесины ели и сосны.',
    },
    {
      question: 'Можно ли купить только стеновой комплект дома?',
      answer: 'Да можно.',
    },
  ],
  [
    {
      question: 'Работаете ли Вы с индивидуальными проектами?',
      answer:
        'Да, мы работаем с индивидуальными проектами, но зачастую необходима адаптация проекта под требования производства.',
    },
    {
      question: 'Можно ли внести изменение в типовой проект и сколько это стоит?',
      answer:
        'Да, можно. Проектировщик может изменить проект в соответствии с пожеланиями заказчика. Стоимость изменений зависит от объема самих изменений.',
    },
    {
      question: 'Что входит в стоимость дома «под усадку»?',
      answer: 'В стоимость дома «под усадку» входит – стеновые элементы бруса, балки перекрытия.',
    },
    {
      question: 'Сколько стоит проект дома?',
      answer:
        'Проект дома, в случае если клиент заказывает дом с установкой нашими бригадами, обходится заказчику бесплатно, так как авансовый взнос за проект вычитается в дальнейшем из стоимости дома. Стоимость проекта 150руб/м2(пол)',
    },
    {
      question: 'Какие сроки производства и строительства дома?',
      answer:
        'Ориентировочный срок производства и строительства дома общей площадью 150м2 около 3-х месяцев.',
    },
  ],
  [
    {
      question: 'Можно ли покрасить дом в заводских условиях?',
      answer: 'Нет',
    },
    {
      question: 'Можно ли сразу после строительства переходить к отделке?',
      answer:
        'Нет. Переходить к отделке можно, если домокомплект естественной влажности выстоялся 8-12 месяцев. Для профилированного бруса камерной сушки этот период сокращается до 1-2 месяцев.',
    },
    {
      question: 'Можно ли сделать внешние стены 195мм, а внутренние тоньше?',
      answer:
        'Можно, но рекомендуем изготавливать наружные и внутренние стены из бруса одного сечения, для равномерной усадки строения.',
    },
    {
      question: 'Можно ли изготовить первый венец из лиственницы?',
      answer: 'Да, так же подкладочную доску.',
    },
    {
      question: 'Трескается ли профилированный брус?',
      answer:
        'Да, трескается, но при соблюдении на начальном этапе элементарных правил эксплуатации деревянного дома возможно свести их количество к минимальному. Дерево - материал живой и возникновение трещин естественный процесс, связанный с содержанием в древесине влаги (влажностных напряжении).',
    },
  ],
  [
    {
      question: 'Нужно ли производить обработку торцов?',
      answer:
        'Торцы стеновых элементов наиболее восприимчивы к интенсивному обмену влаги. Вследствие интенсивной потери влаги через торцы, на них возможно появление трещин. Во избежание появление подобных дефектов торцы деталей обрабатывают спец. составами. Составы высыхая, образуют эластичную, атмосферостойкую пленку с очень низкой водопроводностью. В результате влагообмен через торцы снижается в 10-15 раз. Но, обработка торцов деталей спец. составами позволит снизить вероятность появления трещин лишь на 70%.',
    },
    {
      question: 'Сколько лет Вы производите и строите дома?',
      answer: 'Наша компания основана в 2001 году.',
    },
    {
      question: 'Сколько лет может простоять дом из профилированного бруса?',
      answer:
        'Для дома из профилированного бруса, при соблюдении элементарных правил эксплуатации, таких как своевременная окраска, грамотное техническое обслуживание и уход , 75 и даже 100 лет являются обычным сроком службы.',
    },
  ],
];

function getSteps() {
  return ['', '', '', ''];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Expands items={itemsLikeSteps[0]} />;
    case 1:
      return <Expands items={itemsLikeSteps[1]} />;
    case 2:
      return <Expands items={itemsLikeSteps[2]} />;
    case 3:
      return <Expands items={itemsLikeSteps[3]} />;
    default:
      return 'Unknown stepIndex';
  }
}

const Questions = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep > 3) {
      setActiveStep(0);
      return;
    }
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Section id="questions" title="Вопросы" color="gray">
      <div>
        <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>{getStepContent(activeStep)}</div>
        <div className={classes.buttons}>
          <Chip
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
            label="Назад"
          />
          <Chip
            className={classes.rightButton}
            color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
            onClick={handleNext}
            label={activeStep === steps.length - 1 ? 'СНАЧА́ЛА' : ' Вперед'}
          />
        </div>
      </div>
    </Section>
  );
};

export default Questions;