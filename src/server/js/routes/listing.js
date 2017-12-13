/**
 *
 *  Online store PWA sample.
 *  Copyright 2017 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

import {Router} from 'express';
import fbAdmin from '../services/firebase';
const router = new Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  fbAdmin.database().ref('/products').once('value').then((snapshot) => {
    res.render('listing', {
      title: 'Holiday Pies — Pie Shop',
      listing_name: 'Holiday Pies',
      listing_description: 'Spice up your winter with our seasonal pies.',
      products: snapshot.val(),
      scripts: [
        'https://www.gstatic.com/firebasejs/4.6.2/firebase.js',
        'js/listing_main.js',
      ],
    });
  });
});

export default router;
