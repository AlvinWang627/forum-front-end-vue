<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>root@example.com</td>
          <td>admin</td>
          <td>
            <button type="button" class="btn btn-link">set as user</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>user1@example.com</td>
          <td>user</td>
          <td>
            <button type="button" class="btn btn-link">set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// const dummyData = {
//   users: [
//     {
//       id: 1,
//       name: "root",
//       email: "root@example.com",
//       password: "$2a$10$smXR5NmTCkpiuPSfkrPFhurxGAAl5V5hyqwwg3iUF3WFuUcWReGry",
//       isAdmin: true,
//       image: null,
//       createdAt: "2022-01-25T14:32:24.000Z",
//       updatedAt: "2022-01-25T14:32:24.000Z",
//     },
//     {
//       id: 2,
//       name: "user1",
//       email: "user1@example.com",
//       password: "$2a$10$rsSdAN2DWwMV7l/TQWXbbORKuDDEcq0wg3Uz7gAxC.UOZqZIlrD6.",
//       isAdmin: false,
//       image: null,
//       createdAt: "2022-01-25T14:32:24.000Z",
//       updatedAt: "2022-01-25T14:32:24.000Z",
//     },
//     {
//       id: 3,
//       name: "user2",
//       email: "user2@example.com",
//       password: "$2a$10$skrPvwkCeq1V8az7RSoPU.A8NPmIHXGWEtUjWzFm0SJUBK3kND0zK",
//       isAdmin: false,
//       image: null,
//       createdAt: "2022-01-25T14:32:24.000Z",
//       updatedAt: "2022-01-25T14:32:24.000Z",
//     },
//   ],
// };
// const dummyUser = {
//   profile: {
//     id: 1,
//     name: "root",
//     email: "root@example.com",
//     password: "$2a$10$smXR5NmTCkpiuPSfkrPFhurxGAAl5V5hyqwwg3iUF3WFuUcWReGry",
//     isAdmin: true,
//     image: null,
//     createdAt: "2022-01-25T14:32:24.000Z",
//     updatedAt: "2022-01-25T14:32:24.000Z",
//     Comments: [
//       {
//         id: 5,
//         text: "Nihil iusto nostrum consequatur voluptate repudiandae aut.",
//         UserId: 1,
//         RestaurantId: 5,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 5,
//           name: "Crawford Schroeder",
//           tel: "970-233-1010 x319",
//           address: "242 Alanis Cliff",
//           opening_hours: "08:00",
//           description:
//             "Omnis deserunt ut vel consequatur.\nVoluptates est explicabo itaque aliquid quia ipsam.\nEum et occaecati voluptate similique.\nPorro qui fuga praesentium ex eaque rerum vel.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=21.526787664334222",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 11,
//         text: "Cum voluptatum voluptatem et ut pariatur asperiores qui rerum tempora.",
//         UserId: 1,
//         RestaurantId: 11,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 11,
//           name: "Ashtyn Satterfield",
//           tel: "996.562.5140 x599",
//           address: "3112 Berta Groves",
//           opening_hours: "08:00",
//           description:
//             "Voluptatum id reiciendis minima dolor quas laboriosam sit. Rerum officiis quos tenetur. Magni quas non.\n \rEt in tempora id animi neque voluptatem quo ex. Sint nam possimus dicta et quo commodi consequuntur autem. Id recusandae rem voluptatum perspiciatis doloribus maxime odit iste cupiditate.\n \rEst totam aliquam quis. Eum neque doloribus dolores. Corporis itaque ad praesentium quia. Omnis aut sint. Repudiandae qui voluptatem sed.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=15.03912604915405",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 1,
//         },
//       },
//       {
//         id: 13,
//         text: "Veniam est sit sit quod deleniti non.",
//         UserId: 1,
//         RestaurantId: 13,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 13,
//           name: "Ahmad Gerhold",
//           tel: "521.758.3550 x461",
//           address: "81605 Elisabeth Villages",
//           opening_hours: "08:00",
//           description: "Magnam saepe quaerat.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=35.57540016217542",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 15,
//         text: "Aliquam sunt ab aliquam magni et et id non aspernatur.",
//         UserId: 1,
//         RestaurantId: 15,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 15,
//           name: "Katlyn McLaughlin",
//           tel: "332-255-4616",
//           address: "62493 Wehner Rapid",
//           opening_hours: "08:00",
//           description: "tempora ut rerum",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=23.599087077761705",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 2,
//         },
//       },
//       {
//         id: 17,
//         text: "Quo sed voluptas et tempora libero.",
//         UserId: 1,
//         RestaurantId: 17,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 17,
//           name: "Michale O'Hara",
//           tel: "1-995-440-8378 x04117",
//           address: "82926 Corkery Brooks",
//           opening_hours: "08:00",
//           description:
//             "Optio inventore quo autem iusto omnis. Numquam placeat optio consequatur a dignissimos dolor officiis eius. Maxime voluptatem sunt voluptatem culpa.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=70.17728243421635",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 2,
//         },
//       },
//       {
//         id: 18,
//         text: "Similique dolor perspiciatis voluptatum ad harum nisi nobis.",
//         UserId: 1,
//         RestaurantId: 18,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 18,
//           name: "Simone Block",
//           tel: "550.971.6072 x03027",
//           address: "07534 Nitzsche Drives",
//           opening_hours: "08:00",
//           description:
//             "Ipsa fuga maiores a eos ut nemo autem. Consequatur et deleniti recusandae voluptas ut enim atque beatae doloremque.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=24.18300956161692",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 22,
//         text: "Esse ipsum voluptas.",
//         UserId: 1,
//         RestaurantId: 22,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 22,
//           name: "Merritt Morar",
//           tel: "(175) 524-9258 x36437",
//           address: "959 Welch Oval",
//           opening_hours: "08:00",
//           description: "doloribus",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=93.29764099025533",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 33,
//         text: "Et incidunt pariatur commodi sint dolore labore consequatur facere.",
//         UserId: 1,
//         RestaurantId: 33,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 33,
//           name: "Bertram Kohler",
//           tel: "989.541.1712 x7296",
//           address: "98177 Prosacco Cove",
//           opening_hours: "08:00",
//           description:
//             "Et eos quia enim veritatis ullam et et. Perferendis laboriosam et delectus eveniet recusandae alias qui. Architecto quo reprehenderit ducimus.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=78.74980140126497",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 36,
//         text: "Enim tempore non velit et rerum rem ipsa.",
//         UserId: 1,
//         RestaurantId: 36,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 36,
//           name: "Jordane Mosciski",
//           tel: "(414) 284-8060 x47011",
//           address: "802 Einar Inlet",
//           opening_hours: "08:00",
//           description:
//             "Similique iusto ad velit qui. Error et dolorum voluptas corrupti quam tempore corporis id. Modi iure corporis error provident rerum sint officia. Expedita maxime exercitationem corrupti. Ex consequuntur tenetur asperiores exercitationem. Aut quia molestiae officiis ut quia dolorum.\n \rAtque repudiandae asperiores inventore sed soluta vel aut provident autem. Est officiis eligendi. Enim quod aut omnis nam soluta est. Quos facere ipsam omnis numquam sed accusantium earum odit perspiciatis. Similique et sed quidem.\n \rItaque repellendus et unde est nostrum eum ullam molestias. Impedit in esse. Quod quaerat architecto et. Doloribus sit adipisci dolorem possimus commodi id et et delectus. Facilis repudiandae ducimus omnis odit qui vero iusto amet molestiae.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=15.552041446233522",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 1,
//         },
//       },
//       {
//         id: 37,
//         text: "Saepe deserunt ut non impedit illum sint tempore.",
//         UserId: 1,
//         RestaurantId: 37,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 37,
//           name: "Ken Rau",
//           tel: "128.217.8009 x65435",
//           address: "13358 Jerrold Crescent",
//           opening_hours: "08:00",
//           description:
//             "Sapiente placeat esse et explicabo consequatur.\nIncidunt delectus quo adipisci incidunt.\nVel quidem est nisi mollitia qui qui doloribus ut exercitationem.\nVelit et est mollitia autem suscipit quidem temporibus doloribus laboriosam.\nAd suscipit enim sapiente qui.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=36.559682006987224",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 43,
//         text: "Ut assumenda ipsam non alias.",
//         UserId: 1,
//         RestaurantId: 43,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 43,
//           name: "Hobart Wisozk",
//           tel: "999-567-8626",
//           address: "7344 Goyette Well",
//           opening_hours: "08:00",
//           description:
//             "Fuga et nemo reprehenderit odit praesentium nam debitis. Doloremque quia ad. Nisi sit rerum sapiente assumenda ut asperiores voluptas non. Assumenda commodi qui itaque odit et. Fuga et sit ipsa id in ut aut molestiae ipsa.\n \rVelit velit officia. Molestiae sint quis pariatur explicabo dolores. Rerum et modi blanditiis officia aut vero enim quia beatae. Labore dolorem aliquid. Sed est dignissimos error et sit natus facere omnis.\n \rRerum quia commodi tenetur laboriosam mollitia. Molestias sunt odit at et sint aspernatur et. Facilis reprehenderit quis. Omnis quaerat est sed modi aliquid sunt suscipit quo. Id voluptatem perferendis quod est sed voluptates quae cum facere.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=47.99893209931898",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 47,
//         text: "Quis illo ad.",
//         UserId: 1,
//         RestaurantId: 47,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 47,
//           name: "Titus Auer",
//           tel: "677.306.6845",
//           address: "093 Rogahn Lodge",
//           opening_hours: "08:00",
//           description:
//             "Nesciunt optio molestiae iure illum eos. Et tempore qui laborum velit est ut.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=67.2391924132653",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 48,
//         text: "Magnam blanditiis ut error laudantium distinctio provident.",
//         UserId: 1,
//         RestaurantId: 48,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 48,
//           name: "Sarai Barton",
//           tel: "544.738.6923 x2918",
//           address: "202 Zackery Ridges",
//           opening_hours: "08:00",
//           description: "voluptas",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=40.131036966056485",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 53,
//         text: "Quia repudiandae ipsa officia eius sint omnis.",
//         UserId: 1,
//         RestaurantId: 3,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 3,
//           name: "Daren Baumbach",
//           tel: "1-829-981-0403",
//           address: "66546 Robb Trail",
//           opening_hours: "08:00",
//           description:
//             "Et magnam repellat quia.\nMolestias doloremque quas ullam quasi minus dolore dolore sed beatae.\nEsse nesciunt et placeat aspernatur facere modi exercitationem illo cumque.\nQui ut enim atque accusamus saepe et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=74.77470831764532",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 56,
//         text: "Officiis et repudiandae rerum vitae temporibus nulla.",
//         UserId: 1,
//         RestaurantId: 6,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 6,
//           name: "Delaney Stamm",
//           tel: "(931) 907-9024",
//           address: "6752 Yost Fords",
//           opening_hours: "08:00",
//           description:
//             "Asperiores dolores et in sit sapiente.\nBeatae maiores non deleniti maxime laborum.\nDeserunt animi alias velit est id expedita omnis id.\nSunt debitis repellat ea atque vitae veritatis aut beatae odio.\nQuis tenetur voluptate reprehenderit atque at quas.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=37.749536446764374",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 60,
//         text: "Sed perspiciatis consectetur labore.",
//         UserId: 1,
//         RestaurantId: 10,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 10,
//           name: "Loy Ullrich DDS",
//           tel: "734.138.1229",
//           address: "7747 Ondricka Shore",
//           opening_hours: "08:00",
//           description:
//             "Aut doloribus nemo odio quae officia vel aut iure consequatur. Consequatur repellat velit autem tempora deleniti dolorem alias provident. Id ea quia cumque aut occaecati sunt itaque voluptate et. Sapiente molestiae minus maiores et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=76.99420454152227",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 63,
//         text: "Quia ipsam molestias nihil quidem et error eum.",
//         UserId: 1,
//         RestaurantId: 13,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 13,
//           name: "Ahmad Gerhold",
//           tel: "521.758.3550 x461",
//           address: "81605 Elisabeth Villages",
//           opening_hours: "08:00",
//           description: "Magnam saepe quaerat.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=35.57540016217542",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 64,
//         text: "Velit rerum quam dolorem sed ipsa provident eum.",
//         UserId: 1,
//         RestaurantId: 14,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 14,
//           name: "Vivien Tromp",
//           tel: "1-319-233-3693",
//           address: "28106 Nakia Junction",
//           opening_hours: "08:00",
//           description:
//             "Officia voluptate doloribus dolorum non. Dolores nobis quae veniam pariatur. Officia et corrupti ut est vel ad iure qui. Temporibus sequi at esse magni magnam.\n \rUt est ex. Eveniet nam ipsum earum natus. Vitae alias numquam et officiis pariatur earum. Rerum voluptas quia et.\n \rExpedita sit unde animi magnam quia cumque totam omnis molestiae. Illum corporis consequatur. Sit et sint nesciunt ea cupiditate qui.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=16.787109931187395",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 65,
//         text: "Dignissimos laudantium dolorem non error autem qui quis necessitatibus voluptatem.",
//         UserId: 1,
//         RestaurantId: 15,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 15,
//           name: "Katlyn McLaughlin",
//           tel: "332-255-4616",
//           address: "62493 Wehner Rapid",
//           opening_hours: "08:00",
//           description: "tempora ut rerum",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=23.599087077761705",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 2,
//         },
//       },
//       {
//         id: 66,
//         text: "Odit eaque repellendus est consequatur tempora.",
//         UserId: 1,
//         RestaurantId: 16,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 16,
//           name: "Arnoldo Treutel V",
//           tel: "995-038-3083",
//           address: "3747 Wendell Fork",
//           opening_hours: "08:00",
//           description:
//             "Vel ab ratione rerum necessitatibus qui qui qui et. Soluta omnis exercitationem laudantium libero. Neque ut libero. Necessitatibus ut fugit rerum quod occaecati officiis minima ut molestiae. Dicta eligendi suscipit nobis dolorem et et. Nemo provident maxime et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=22.937814629484965",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 68,
//         text: "Suscipit voluptatem vitae voluptatibus non.",
//         UserId: 1,
//         RestaurantId: 18,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 18,
//           name: "Simone Block",
//           tel: "550.971.6072 x03027",
//           address: "07534 Nitzsche Drives",
//           opening_hours: "08:00",
//           description:
//             "Ipsa fuga maiores a eos ut nemo autem. Consequatur et deleniti recusandae voluptas ut enim atque beatae doloremque.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=24.18300956161692",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 71,
//         text: "Et et provident cumque temporibus alias assumenda sapiente soluta.",
//         UserId: 1,
//         RestaurantId: 21,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 21,
//           name: "Dee Brakus III",
//           tel: "721.343.3201",
//           address: "76358 Brad Trail",
//           opening_hours: "08:00",
//           description:
//             "Est iste velit fugiat qui cupiditate est similique nemo. Natus cupiditate dolores omnis omnis. Id impedit eveniet eum.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=6.309461898601598",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 82,
//         text: "Reiciendis sed nulla perspiciatis dolor aliquam.",
//         UserId: 1,
//         RestaurantId: 32,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 32,
//           name: "Addie Cartwright",
//           tel: "(924) 760-7596 x46827",
//           address: "9151 Kari Junction",
//           opening_hours: "08:00",
//           description:
//             "Est aut est.\nSit doloremque qui eos reiciendis quibusdam eligendi occaecati neque ut.\nVoluptas dolor et aliquid consequatur natus deleniti et laboriosam et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=85.39457337699015",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 87,
//         text: "Autem sapiente voluptatum et ut ut illum maxime consectetur.",
//         UserId: 1,
//         RestaurantId: 37,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 37,
//           name: "Ken Rau",
//           tel: "128.217.8009 x65435",
//           address: "13358 Jerrold Crescent",
//           opening_hours: "08:00",
//           description:
//             "Sapiente placeat esse et explicabo consequatur.\nIncidunt delectus quo adipisci incidunt.\nVel quidem est nisi mollitia qui qui doloribus ut exercitationem.\nVelit et est mollitia autem suscipit quidem temporibus doloribus laboriosam.\nAd suscipit enim sapiente qui.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=36.559682006987224",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 88,
//         text: "Quis eaque nisi possimus quisquam voluptatem est maiores eligendi.",
//         UserId: 1,
//         RestaurantId: 38,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 38,
//           name: "Dillan Hauck",
//           tel: "(302) 399-9692",
//           address: "2234 Rodrigo Corners",
//           opening_hours: "08:00",
//           description:
//             "Similique minima omnis alias rerum. Veritatis quod voluptatem magni. Dolorem distinctio id cumque.\n \rSoluta laborum asperiores aut ut voluptas. Consequatur dicta ut animi aliquam autem esse enim qui veniam. Voluptas sed in temporibus. Illo et sed quidem iste nostrum earum quisquam.\n \rNobis est enim dolores. Veniam cumque hic id. Accusamus commodi quaerat officia optio dignissimos repellat sit velit sit.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=25.346252380221767",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 95,
//         text: "Quia ducimus fugit ipsa.",
//         UserId: 1,
//         RestaurantId: 45,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 45,
//           name: "Frieda Green",
//           tel: "(758) 504-0800 x7406",
//           address: "171 Irving Villages",
//           opening_hours: "08:00",
//           description:
//             "Aut placeat ea quae sunt perspiciatis omnis numquam. Quia ullam ipsum modi omnis eos. Eaque illo eligendi numquam qui tenetur ab molestiae deleniti. Autem atque voluptatem quas et labore. Optio est in fugiat omnis voluptatem omnis ut tempore.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=61.06070971110016",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 96,
//         text: "Nihil magnam molestiae nihil aut inventore corporis saepe rerum.",
//         UserId: 1,
//         RestaurantId: 46,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 46,
//           name: "Kenyon Okuneva",
//           tel: "(102) 446-1467",
//           address: "99780 Sadye Harbor",
//           opening_hours: "08:00",
//           description: "Similique expedita explicabo ut non qui quos quia.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=27.946199008386973",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 98,
//         text: "Impedit nihil officiis repellat odio occaecati.",
//         UserId: 1,
//         RestaurantId: 48,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 48,
//           name: "Sarai Barton",
//           tel: "544.738.6923 x2918",
//           address: "202 Zackery Ridges",
//           opening_hours: "08:00",
//           description: "voluptas",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=40.131036966056485",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 107,
//         text: "In sed ab.",
//         UserId: 1,
//         RestaurantId: 7,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 7,
//           name: "Sadye Padberg",
//           tel: "1-097-807-6090",
//           address: "794 Wunsch Flats",
//           opening_hours: "08:00",
//           description: "nesciunt autem vero",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=46.49691159364073",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 110,
//         text: "Quia et velit vel ut voluptates porro rerum et optio.",
//         UserId: 1,
//         RestaurantId: 10,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 10,
//           name: "Loy Ullrich DDS",
//           tel: "734.138.1229",
//           address: "7747 Ondricka Shore",
//           opening_hours: "08:00",
//           description:
//             "Aut doloribus nemo odio quae officia vel aut iure consequatur. Consequatur repellat velit autem tempora deleniti dolorem alias provident. Id ea quia cumque aut occaecati sunt itaque voluptate et. Sapiente molestiae minus maiores et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=76.99420454152227",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 111,
//         text: "Cumque laboriosam nulla non illo quas omnis.",
//         UserId: 1,
//         RestaurantId: 11,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 11,
//           name: "Ashtyn Satterfield",
//           tel: "996.562.5140 x599",
//           address: "3112 Berta Groves",
//           opening_hours: "08:00",
//           description:
//             "Voluptatum id reiciendis minima dolor quas laboriosam sit. Rerum officiis quos tenetur. Magni quas non.\n \rEt in tempora id animi neque voluptatem quo ex. Sint nam possimus dicta et quo commodi consequuntur autem. Id recusandae rem voluptatum perspiciatis doloribus maxime odit iste cupiditate.\n \rEst totam aliquam quis. Eum neque doloribus dolores. Corporis itaque ad praesentium quia. Omnis aut sint. Repudiandae qui voluptatem sed.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=15.03912604915405",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 1,
//         },
//       },
//       {
//         id: 114,
//         text: "Accusamus explicabo accusantium occaecati delectus saepe ipsum reiciendis rerum excepturi.",
//         UserId: 1,
//         RestaurantId: 14,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 14,
//           name: "Vivien Tromp",
//           tel: "1-319-233-3693",
//           address: "28106 Nakia Junction",
//           opening_hours: "08:00",
//           description:
//             "Officia voluptate doloribus dolorum non. Dolores nobis quae veniam pariatur. Officia et corrupti ut est vel ad iure qui. Temporibus sequi at esse magni magnam.\n \rUt est ex. Eveniet nam ipsum earum natus. Vitae alias numquam et officiis pariatur earum. Rerum voluptas quia et.\n \rExpedita sit unde animi magnam quia cumque totam omnis molestiae. Illum corporis consequatur. Sit et sint nesciunt ea cupiditate qui.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=16.787109931187395",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 116,
//         text: "Sapiente culpa sapiente placeat.",
//         UserId: 1,
//         RestaurantId: 16,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 16,
//           name: "Arnoldo Treutel V",
//           tel: "995-038-3083",
//           address: "3747 Wendell Fork",
//           opening_hours: "08:00",
//           description:
//             "Vel ab ratione rerum necessitatibus qui qui qui et. Soluta omnis exercitationem laudantium libero. Neque ut libero. Necessitatibus ut fugit rerum quod occaecati officiis minima ut molestiae. Dicta eligendi suscipit nobis dolorem et et. Nemo provident maxime et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=22.937814629484965",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 120,
//         text: "Qui est quos facilis distinctio sit et.",
//         UserId: 1,
//         RestaurantId: 20,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 20,
//           name: "Tressa Schuppe",
//           tel: "963.633.1692",
//           address: "286 Upton Harbors",
//           opening_hours: "08:00",
//           description:
//             "Eos provident qui dignissimos perspiciatis impedit in rem beatae. Est eaque qui. Sit aliquam et aut voluptas aut eum. Magni earum dolores aliquam deserunt.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=49.93597180068778",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 128,
//         text: "Eos quam voluptatem dolore est eius sunt dolores.",
//         UserId: 1,
//         RestaurantId: 28,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 28,
//           name: "Keara Willms",
//           tel: "1-706-085-7748 x214",
//           address: "2042 Ernser Land",
//           opening_hours: "08:00",
//           description:
//             "Eaque nulla ducimus non numquam consequatur temporibus. Dolorem consequatur rerum voluptatem ducimus. Fugit nihil dolores voluptatem aut animi saepe sunt enim. Explicabo unde optio aut. Repellendus quas sint nam soluta in in.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=33.26195586714369",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//       {
//         id: 129,
//         text: "Cum quia deleniti consequatur ipsum est nihil fugiat dolores.",
//         UserId: 1,
//         RestaurantId: 29,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 29,
//           name: "Dawn Sanford",
//           tel: "328.632.7031 x0464",
//           address: "3363 Piper Crossing",
//           opening_hours: "08:00",
//           description: "laboriosam",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=26.341054234536365",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 132,
//         text: "Autem mollitia impedit itaque eligendi nobis aut.",
//         UserId: 1,
//         RestaurantId: 32,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 32,
//           name: "Addie Cartwright",
//           tel: "(924) 760-7596 x46827",
//           address: "9151 Kari Junction",
//           opening_hours: "08:00",
//           description:
//             "Est aut est.\nSit doloremque qui eos reiciendis quibusdam eligendi occaecati neque ut.\nVoluptas dolor et aliquid consequatur natus deleniti et laboriosam et.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=85.39457337699015",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 135,
//         text: "Animi natus ea consequatur sunt et quae ut quidem.",
//         UserId: 1,
//         RestaurantId: 35,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 35,
//           name: "Pierre Boehm",
//           tel: "439-219-8654 x8289",
//           address: "93178 Jake Corner",
//           opening_hours: "08:00",
//           description:
//             "Neque quibusdam assumenda unde rerum id delectus. Quos ullam et. Ea impedit eligendi.\n \rRerum odio rem distinctio inventore earum dolorum beatae. Magni provident voluptate quia laudantium sit consequatur velit. Iusto praesentium in dolorum cumque aut nostrum dolore. Doloremque et iure. Porro et eveniet fugit nostrum quos quo occaecati dolor.\n \rModi aut id consectetur repellat illum corrupti consequatur quia itaque. Sed impedit non omnis voluptatum. Ut nam fugiat est omnis. Cum perferendis ex qui officiis. Enim similique quia. Iure occaecati aliquam.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=39.8139333815162",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 139,
//         text: "Optio sunt eos reprehenderit adipisci quibusdam quis voluptas.",
//         UserId: 1,
//         RestaurantId: 39,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 39,
//           name: "Shyann Waelchi",
//           tel: "208-643-1067 x92907",
//           address: "5092 Tianna Key",
//           opening_hours: "08:00",
//           description: "asperiores voluptatum rerum",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=26.664084326892954",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 3,
//         },
//       },
//       {
//         id: 142,
//         text: "Enim neque qui est ratione.",
//         UserId: 1,
//         RestaurantId: 42,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 42,
//           name: "Arden Corwin",
//           tel: "832-814-2168",
//           address: "85212 Deangelo Stream",
//           opening_hours: "08:00",
//           description:
//             "Repellendus cupiditate voluptas.\nError impedit perspiciatis est repellendus natus molestias impedit.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=65.54528991126448",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 146,
//         text: "Sit ut quo deleniti odio est illo ea necessitatibus laborum.",
//         UserId: 1,
//         RestaurantId: 46,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 46,
//           name: "Kenyon Okuneva",
//           tel: "(102) 446-1467",
//           address: "99780 Sadye Harbor",
//           opening_hours: "08:00",
//           description: "Similique expedita explicabo ut non qui quos quia.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=27.946199008386973",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 147,
//         text: "Sit quaerat esse.",
//         UserId: 1,
//         RestaurantId: 47,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 47,
//           name: "Titus Auer",
//           tel: "677.306.6845",
//           address: "093 Rogahn Lodge",
//           opening_hours: "08:00",
//           description:
//             "Nesciunt optio molestiae iure illum eos. Et tempore qui laborum velit est ut.",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=67.2391924132653",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 4,
//         },
//       },
//       {
//         id: 148,
//         text: "Eius aut veniam ipsa aliquid enim hic natus similique occaecati.",
//         UserId: 1,
//         RestaurantId: 48,
//         createdAt: "2022-01-25T14:32:24.000Z",
//         updatedAt: "2022-01-25T14:32:24.000Z",
//         Restaurant: {
//           id: 48,
//           name: "Sarai Barton",
//           tel: "544.738.6923 x2918",
//           address: "202 Zackery Ridges",
//           opening_hours: "08:00",
//           description: "voluptas",
//           image:
//             "https://loremflickr.com/320/240/restaurant,food/?random=40.131036966056485",
//           viewCounts: 0,
//           createdAt: "2022-01-25T14:32:24.000Z",
//           updatedAt: "2022-01-25T14:32:24.000Z",
//           CategoryId: 5,
//         },
//       },
//     ],
//     FavoritedRestaurants: [],
//     Followers: [],
//     Followings: [],
//   },
//   isFollowed: false,
// };
// s;
import AdminNav from "./../components/AdminNav";
export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      user: {
        id: '',
        email: '',
        isAdmin: false
      }
    };
  },
  methods: {
    fetchUser() {
      this.user 
    }
  }
};
</script>