'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7d528279918accf3672995c15e0fe433",
"index.html": "9fc4effdb8f1755d6abef95f922760c8",
"/": "9fc4effdb8f1755d6abef95f922760c8",
"main.dart.js": "34e1311eaaf9447a14376b3bc4d18912",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "efd56d12a13e5a6156bca2ce7257896e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32606ef58cff78ce6ec23f9a45033de1",
"assets/AssetManifest.json": "c6d14698c066fd1f88fd8295a2604130",
"assets/NOTICES": "1294a6b03d07de0f194dbf67e313e55c",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/AssetManifest.bin.json": "2e6f7970402838901b2754e8099e69b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "bc8babb5b90d2c485abae4ed4d725b4a",
"assets/fonts/MaterialIcons-Regular.otf": "3b2fd1334523f7e27b24c00686d05781",
"assets/assets/images/screenshots/rewards.png": "675522791ed6bf6c47cdd20fd51c06a8",
"assets/assets/images/screenshots/community.png": "d83a9529eaff23e258af346321f7322e",
"assets/assets/images/CUBoulderlogo.png": "f6fd05447dda3247e9731170d7a64359",
"assets/assets/images/vegetables/Kale.png": "867248eec91fef9616cacd4492719412",
"assets/assets/images/vegetables/Olives.png": "0763dcdf0fc7a268db16d5ca6c24051a",
"assets/assets/images/vegetables/Cauliflower.png": "9d392d611614f570e6ccbda6d47441e8",
"assets/assets/images/vegetables/BokChoy.png": "c68a8986ba4e656302b5890e4c70664a",
"assets/assets/images/vegetables/FermentedVegetables.png": "d05586e363421570141ae99e21cbea0c",
"assets/assets/images/vegetables/Corn.png": "918b965ea8e8ffc16c0a79728e241b4e",
"assets/assets/images/vegetables/Mushrooms.png": "d317a9b1c72c28a5b0bcb6f7900a2ec6",
"assets/assets/images/vegetables/Sprouts.png": "839225911dc259a0cbc848769be5a9fc",
"assets/assets/images/vegetables/Onion.png": "08d6d81251fce470a6ed1c93865e257c",
"assets/assets/images/vegetables/Tomato.png": "e9128a9ea13e3273cd668b4c11eb2438",
"assets/assets/images/vegetables/Avocado.png": "cea2be8e977054b4170b8240b58f1f54",
"assets/assets/images/vegetables/Spinach.png": "0d98d0dea9a56806bc1400d76f3c929e",
"assets/assets/images/vegetables/Cabbage.png": "bfa0f39142e87109e6bbb67f1fa08d9c",
"assets/assets/images/vegetables/SweetPotato.png": "e46819498c6d72f89350c711f93be7ea",
"assets/assets/images/vegetables/BellPepper.png": "1d173f46f7cb27e508dd96484a359725",
"assets/assets/images/vegetables/Carrots.png": "31f6f93a47f9005ad23726a77a84c46a",
"assets/assets/images/vegetables/Broccoli.png": "c1a15e55ae15c618799ee383abb73e30",
"assets/assets/images/Banner.png": "3d7dcfca78700b197877809b41e0365b",
"assets/assets/images/proteins/Yogurt.png": "440ddd729740753faf8708994edab524",
"assets/assets/images/proteins/Tofu.png": "23f466e5024df8469ff813f24b04df46",
"assets/assets/images/proteins/Chicken.png": "649d740e9c9076a90b9997bea82d9e6f",
"assets/assets/images/proteins/Eggs.png": "d295c88e9fdf7412325d002602999b2f",
"assets/assets/images/proteins/Beef.png": "8af57694a58a5216b1c2103776782c34",
"assets/assets/images/proteins/Fish.png": "045ffcac3baf1261c35717702e6f2a8e",
"assets/assets/images/Food-Image-1.png": "3c89666992132a6b9bb5fed763d7eb48",
"assets/assets/images/campus-banner.png": "8f985c02b511d4dbd2a5229a9f7b6e44",
"assets/assets/images/researcher.png": "60a5713e614ac3cedb7ac47fd8703389",
"assets/assets/images/FFR-APP-DAILY-SUBMISSIONS-WITH-BACKGROUND.png": "01ff096ebfe1a03bbe70d44102c411a4",
"assets/assets/images/23ZipBowl.png": "1e3dd78f571c36ff6ce2714b236707b6",
"assets/assets/images/Other.png": "a210edb5f62c8127e40d3d2baa8195fd",
"assets/assets/images/Onboarding-Welcome-Graphic.png": "626695ce5c171f07e493fd7b49de5a13",
"assets/assets/images/FFR-APP-DAILY-SUBMISSION.png": "d646abbe5a6b91611b5e4d61c47235c6",
"assets/assets/images/good_fats/CanolaOil.png": "89e78298a89b9470e70f65d9c755153d",
"assets/assets/images/good_fats/Gouda.png": "b7ac9425e8ea1bdaf676d43cbf0053f1",
"assets/assets/images/good_fats/Yogurt.png": "440ddd729740753faf8708994edab524",
"assets/assets/images/good_fats/Butter.png": "23f466e5024df8469ff813f24b04df46",
"assets/assets/images/good_fats/OliveOil.png": "3a46e21f5c661b54e2b1411ec6b4819c",
"assets/assets/images/good_fats/HarvatiCheese.png": "c8e61869f9c6e9048d8f754f3cf57e20",
"assets/assets/images/good_fats/CreamCheese.png": "5d897aec15d5c9f94811b0695d46ae14",
"assets/assets/images/good_fats/Walnut.png": "5039e889664ebcf60853012e8f17bc55",
"assets/assets/images/good_fats/BrieCheese.png": "cc0e2bb568848ceacdd12f9c2bb34666",
"assets/assets/images/good_fats/Avocado-2.png": "eb18740233df1648dfdda962533753b0",
"assets/assets/images/good_fats/Chocolate.png": "5a8242983c337151374402f8e77a6049",
"assets/assets/images/good_fats/SourCream.png": "69407140a5d110d2eb95c56efe55cdfd",
"assets/assets/images/FFR-LOGO-2.png": "d02628fde3d76860b2f4b309f451fb87",
"assets/assets/images/FFR-APP-TRACKING-HISTORY-WITH-BACKGROUND.png": "488959bb8728322f7f9d9a21f80c7687",
"assets/assets/images/FFR-APP-QUOTE-OF-THE-DAY.png": "1efe1dab9e74f3b4a459586d1bdd2787",
"assets/assets/images/food-2-graphic.png": "bf83c804b1f649df00d470a4b3dddb4d",
"assets/assets/images/FFR-APP-TRACKING-HISTORY-OPTION1.png": "317ca4da140debdaeca9c2a17c9869cd",
"assets/assets/images/WorldFoodBowl.png": "9b772f23918715c4de2ec3c3ffcea89e",
"assets/assets/images/WorldFoodBowl2.png": "cd3ab1e4eccd2ed9d9ae19e23d0796b3",
"assets/assets/images/ffr23-logo.png": "f6fd05447dda3247e9731170d7a64359",
"assets/assets/images/fruits/Persimmon.png": "95cee169c3c11fbe45f76bd26052f4c5",
"assets/assets/images/fruits/Grapefruit.png": "c102fd9df2c6565275e3c8e1753937e2",
"assets/assets/images/fruits/Raspberries.png": "81ab37cb9ba039bd058910a0e68495ac",
"assets/assets/images/fruits/Blueberries.png": "8cca9d0c2de2032f065e3187290e057d",
"assets/assets/images/fruits/Orange.png": "5c21084cf35a2adb529359e3bcf34c98",
"assets/assets/images/fruits/Raisins.png": "66fa94446bf8ef885381e90bab1c08c2",
"assets/assets/images/fruits/Apple.png": "5bc6e21d42ca89b67844b14e0de45dae",
"assets/assets/images/fruits/Banana.png": "4ebb3f020223e15b46d7fe51e6cb9ac4",
"assets/assets/images/avatars/Avatar-1.png": "5db084b807efa6aebd23bc7f0346c14f",
"assets/assets/images/avatars/Avatar-12.png": "23b7aebbdeb0678b1b9b2a4edb46ec27",
"assets/assets/images/avatars/Avatar-13.png": "546bd6c770ee9eab9dc3a6c20658fb77",
"assets/assets/images/avatars/Avatar-0.png": "3b5c25f4517aab19e7abf0707038199f",
"assets/assets/images/avatars/Avatar-2.png": "f623f433db59da6b9c720abcb4b50cb7",
"assets/assets/images/avatars/Avatar-11.png": "17c9e241ad58886ae00f62b6d1477099",
"assets/assets/images/avatars/Avatar-10.png": "4a1e24e3fe86b54ba1f4e721c6e0b597",
"assets/assets/images/avatars/Avatar-3.png": "b9883ff8cef6d19c47a9fda66ab29a55",
"assets/assets/images/avatars/Avatar-7.png": "d1963efeeb4a4d29e2f09a5dc64705e8",
"assets/assets/images/avatars/Avatar-14.png": "6b335f7a8555c4f21b1c60a7ff657d6c",
"assets/assets/images/avatars/Avatar-15.png": "5879c923034057e3750a613e1da9f21b",
"assets/assets/images/avatars/Avatar-6.png": "b40cc5e1afebb7af8eb6365e57a89d00",
"assets/assets/images/avatars/Avatar-4.png": "ec73093a0aa44759974354043bc5ff7c",
"assets/assets/images/avatars/Avatar-5.png": "82b5eb5450a07f3910ac93d8e85bd315",
"assets/assets/images/avatars/Avatar--5.png": "60368659ba682e5c20538d620a832e0d",
"assets/assets/images/avatars/Avatar--4.png": "4fffa8a49624d08874f0a663b51b296f",
"assets/assets/images/avatars/Avatar--1.png": "c60b0a331440c60ce38463feb989ac8c",
"assets/assets/images/avatars/Avatar--3.png": "f0ce6d8de7b2fe0c494b96745e401efa",
"assets/assets/images/avatars/Avatar--2.png": "f0cb53eb26f8049291892a1fc079fdd9",
"assets/assets/images/avatars/Avatar-8.png": "5f6887e17e1361fc4d8abd032b51d443",
"assets/assets/images/avatars/Avatar-9.png": "c11cb4125187fb073ca9d88c15446a7f",
"assets/assets/images/FFR-APP-SUBMIT-TRACKING.png": "610b1b25b91e6f94f64be571d37bee12",
"assets/assets/images/ffr23-banner.png": "8f985c02b511d4dbd2a5229a9f7b6e44",
"assets/assets/icons/app-icon.png": "efd56d12a13e5a6156bca2ce7257896e",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
