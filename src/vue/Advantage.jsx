import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Chip from '@material-ui/core/Chip';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
  buttons: {
    marginTop: 16,
  },
  rightButton: {
    marginLeft: 16,
  },
  stepper: {
    backgroundColor: 'inherit',
  },
});

function getSteps() {
  return ['Точность', 'Надежность', 'Скорость', 'Дешевизна', 'Красота', 'Удобство'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Древесина обрабатывается в цехах на высокоточном оборудовании с соблюдением заданных параметров. Исключены дефекты, а на строительной площадке не потребуется дополнительная подгонка.';
    case 1:
      return 'Герметичность соединений обеспечит целостность конструкции. Дом будет надежно защищен от сквозняка и дождей. Этот же факт влияет на отличное сохранение тепла, позволяя экономить топливо при дальнейшей эксплуатации.';
    case 2:
      return (
        <span>
          Короткие сроки строительства, на все работы уходит в среднем от одного до трёх месяцев.{' '}
          <br /> В доме из профилированного бруса камерной сушки к отделке можно приступать уже
          через месяц.
        </span>
      );
    case 3:
      return 'Брус относится к лёгким материалам и не требует тяжелого и дорогостоящего фундамента.';
    case 4:
      return 'Деревянные дома не требуют дополнительной отделки ни внутри, ни снаружи. Эстетика натурального материала позволяет вписать постройку в загородный пейзаж.';
    case 5:
      return 'Дерево издавна славится созданием микроклимата с особым запахом и естественной вентиляцией.';
    default:
      return 'Unknown stepIndex';
  }
}

const Advantage = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep > 5) {
      setActiveStep(0);
      return;
    }

    setActiveStep(nextStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Section id="advantage" title="ПРЕИМУЩЕСТВА" color="gray">
      <div>
        <Stepper className={classes.stepper} activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
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
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </Section>
  );
};

export default Advantage;
