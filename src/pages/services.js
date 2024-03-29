import Meta from "@/components/Page Components/Meta"
import PageTitle from "@/components/Page Components/PageTitle"
import InfoCard from "@/components/Page Components/InfoCard"
import styles from '../styles/Page Styles/Services.module.css'

/**
 * Services component that displays information about the auto detailing services offered.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
const services = () => {
  return (
    <>
      <Meta
        title='Services Offered'
        description="Discover our comprehensive range of auto detailing services at Gentry's Auto Detailing. From interior and exterior detailing to paint correction and ceramic coating, we offer the highest quality service to keep your car looking its best. Our experienced team uses only the best products and techniques to provide long-lasting results. Contact us today to learn more about our services and schedule an appointment."
        keywords="auto detailing, car detailing, detailing services, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, packages, pricing, service list, detailing options, car detailing products"
      />
      <PageTitle title='services' />
      <div className={styles.flexContainer}>
        <InfoCard
          title='Interior Only'
          itemArray={["$125 Small SUV/Car", "$135 Large SUV/Truck"]}
          width='400px'
        ></InfoCard>
        <InfoCard
          title='Exterior Only'
          itemArray={['$115 Small SUV/Car', '$125 Large SUV/Truck']}
          width='400px'
        ></InfoCard>
        <InfoCard
          title='Full Detailing'
          itemArray={['$160 Small SUV/Car', '$180 Large SUV/Truck']}
          width='400px'
        ></InfoCard>
      </div>
      <div className={styles.flexContainer}>
        <InfoCard
          title='Interior Cleaning Includes:'
          itemArray={['Vacuum', 'Stain Removal', 'Cloth Seat Shampooing',
            'Mat/Carpet Shampooing', 'Door Jams Power-Washed', 'Leather Conditioner',
            'Plastic Protectant', 'Interior Windows Wiped']}
          width='600px'
          height='350px'
        ></InfoCard>
        <InfoCard
          title='Exterior Cleaning Includes:'
          itemArray={['Door Jams Power-Washed', 'Exterior Wash + Dry', 'Wheels Scrubbed', 'Tire Shine',
            'Door Handles Brushed',
            'Plastic Protectant', 'Interior Windows Wiped']}
          width='600px'
          height='350px'
        ></InfoCard>
      </div>
      <div className={styles.disclaimer}>
        <p>*Full Detail Includes all of the services listed above*</p>
        <p>*Prices may vary depending on dirtiness of vehicle*</p>
      </div>
    </>
  )
}

export default services