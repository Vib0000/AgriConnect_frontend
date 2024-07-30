import digital_farming from "../images/digital_farming.jpg"
import organic_farming from "../images/organic_farming.avif"
import crops_divr from "../images/crop_diversification.jpg"
import contract_farmiong from "../images/contract_farming.jpg"
import climate_change from "../images/Climate_change-environment.jpg"
// import land_fragmentation from "../images/"
import water_scar from "../images/water_scarcity.jpg"
// import access_credit from "../images/"
import pmfby from "../images/pmfby-banner.jpg"
import pmksy from "../images/pmksy.jpg"
import nmsa from "../images/nmsa.jpg"
const AggrNewsData=[
    {
        "title": "Current Trends and Challenges in Indian Agriculture",
        "content": [
          {
            "sectionTitle": "Current Trends in Indian Agriculture",
            "details": [
              {
                "id": "1",
                "title": "Digital Transformation and Smart Farming",
                "description": "The integration of technology into agriculture, often referred to as 'AgriTech,' is revolutionizing the sector. From precision farming using IoT and AI to mobile apps for weather forecasts and market prices, digital tools are helping farmers make informed decisions. Startups and established companies alike are investing in platforms that offer real-time data, crop monitoring, and efficient supply chain management.",
                "image": digital_farming,
              },
              {
                "id": "2",
                "title": "Organic Farming and Sustainable Practices",
                "description": "With increasing awareness about health and environmental issues, organic farming is gaining traction in India. Consumers are willing to pay a premium for organic products, encouraging farmers to adopt eco-friendly practices. The government is also promoting organic farming through various schemes and subsidies, aiming to increase the area under organic cultivation.",
                "image": organic_farming,
              },
              {
                "id": "3",
                "title": "Crop Diversification and High-Value Crops",
                "description": "To enhance income and reduce dependency on traditional crops, farmers are diversifying their crop choices. There is a noticeable shift towards high-value crops like fruits, vegetables, spices, and medicinal plants. This diversification not only boosts farmers' income but also meets the growing demand for diverse food products.",
                "image": crops_divr
              },
              {
                "id": "4",
                "title": "Rise of Contract Farming",
                "description": "Contract farming is becoming more prevalent in India, where farmers enter agreements with buyers, including food processing companies and retail chains. This model provides farmers with assured markets and often access to quality inputs and technical assistance. It also helps mitigate risks related to market price fluctuations.",
                "image": contract_farmiong,
              }
            ]
          },
          {
            "sectionTitle": "Challenges Facing Indian Agriculture",
            "details": [
              {
                "id": "5",
                "title": "Climate Change and Unpredictable Weather",
                "description": "Indian agriculture is heavily dependent on the monsoon, making it vulnerable to climate change and erratic weather patterns. Unpredictable rains, droughts, and extreme weather events adversely affect crop yields and farming incomes. There is a pressing need for climate-resilient agricultural practices and crops.",
                "image": climate_change
              },
              {
                "id": "6",
                "title": "Land Fragmentation",
                "description": "The average farm size in India is shrinking due to the division of land among heirs. This fragmentation makes it challenging to adopt modern farming techniques and reduces economies of scale. Consolidation of landholdings, either through cooperative farming or other means, is essential for improving productivity.",
                // "image": land_fragmentation
              },
              {
                "id": "7",
                "title": "Water Scarcity",
                "description": "Overexploitation of groundwater and inefficient irrigation practices have led to severe water scarcity in many parts of India. Sustainable water management, including the adoption of micro-irrigation systems like drip and sprinkler irrigation, is crucial to ensure water availability for agriculture.",
                "image": water_scar
              },
              {
                "id": "8",
                "title": "Access to Credit and Inputs",
                "description": "Small and marginal farmers often struggle to access credit and quality inputs like seeds, fertilizers, and pesticides. High-interest rates and dependence on informal credit sources can lead to a debt trap. Improving access to institutional credit and inputs at affordable rates is vital for the sector's growth.",
                // "image": access_credit
              },
              {
                "id": "9",
                "title": "Market Access and Price Volatility",
                "description": "Farmers often face difficulties accessing markets and getting fair prices for their produce. The lack of adequate infrastructure, such as storage facilities and transportation, exacerbates the issue. Additionally, price volatility for agricultural products can lead to financial instability for farmers.",
                // "image": access_credit
              }
            ]
          },
          {
            "sectionTitle": "Government Initiatives and Future Directions",
            "details": [
              {
                "id": "10",
                "title": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
                "description": "A crop insurance scheme to protect farmers from yield losses due to natural calamities.",
                "image": pmfby
              },
              {
                "id": "11",
                "title": "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
                "description": "Aimed at improving irrigation infrastructure and water use efficiency.",
                "image": pmksy
              },
              {
                "id": "12",
                "title": "National Mission for Sustainable Agriculture (NMSA)",
                "description": "Focuses on promoting sustainable agricultural practices.",
                "image": nmsa
              },
              {
                "id": "13",
                "title": "e-NAM (National Agriculture Market)",
                "description": "An online trading platform for better price discovery and transparent transactions.",
                "image": "path/to/enam.jpg"
              }
            ]
          }
        ]
      }
      
]

export default AggrNewsData;