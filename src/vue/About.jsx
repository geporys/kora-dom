import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import StepContent from '@material-ui/core/StepContent';

const useStyle = makeStyles({
  buttons: {
    marginTop: 16,
  },
  rightButton: {
    marginLeft: 16,
  },
});

function getSteps() {
  return ['Производство', 'Проектирование', 'Строительство'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Компания «Kora-dom» основывалась в 2000м году как производственное предприятие. Мы понимаем, что качественные дома возможно произвести лишь на качественном оборудовании, и приложили максимум усилий, чтобы за каждый этап производства отвечали лучшие в своем направлении станки. Высокая точность оборудования в руках высококлассных специалистов – вот залог успеха качественного дома. Мы гордимся тем, что за каждый этап производства дома отвечает оборудование лучших мировых производителей.';
    case 1:
      return 'Именно здесь зарождается «жизнь» Вашего будущего деревянного дома. Проектирование - очень ответственный и важный этап, поскольку деревянные дома возводятся на долгие годы. Правильно подготовленная проектная документация обуславливает четкое соответствие плану и дает представление о каждых последующих этапах. При проектировании учитываются все пожелания заказчика. Необходимо учесть и особенности рельефа, чтобы в будущем фундамент имел возможность «встать» на свое место. Так же важна ориентация дома по отношению к сторонам света для обеспечения наиболее комфортных условий проживания в нем. После утверждения Клиентом всех вопросов, мы готовим рабочие чертежи. Наши специалисты помогут Вам воплотить в жизнь даже самые смелые задумки и мечты. На сайте в разделе проекты Вашему вниманию представлена база типовых проектов деревянных домов.';
    case 2:
      return 'Строительство деревянного дома – ответственный и трудоемкий процесс, который следует доверить профессионалам. Компания «Kora-dom» — это производственное предприятие полного цикла, основным направлением деятельности которого является малоэтажное загородное деревянное строительство. Работая на рынке более 15 лет, мы сумели накопить достаточно опыта, чтобы предлагать нашим заказчикам деревянные дома, выполненные в лучших российских и мировых традициях деревянного домостроения. Мы создаем современные дома из дерева, контролируя качество на всех этапах.';
    default:
      return 'Unknown stepIndex';
  }
}

const About = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep > 2) {
      setActiveStep(0);
      return;
    }
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Section id="about" title="О НАС">
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

export default About;
