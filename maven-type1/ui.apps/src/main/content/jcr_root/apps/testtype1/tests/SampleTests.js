/*
 *  Copyright 2014 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
new hobs.TestSuite("type1 Tests", {path:"/apps/testtype1l/tests/SampleTests.js", register: true})

    .addTestCase(new hobs.TestCase("Navigate to root page")
        .navigateTo("/content/type1.html")
        .asserts.location("/content/type1.html", true)
        .asserts.isTrue(function() {
			return hobs.find("p").text().contains("This page redirects to English");
        })
    )

    .addTestCase(new hobs.TestCase("Navigate to english page")
        .navigateTo("/content/type1/en.html")
        .asserts.location("/content/type1/en.html", true)
        .asserts.visible(".servicecomponent", true)
    )

    .addTestCase(new hobs.TestCase("Navigate to french page")
        .navigateTo("/content/type1/fr.html")
        .asserts.location("/content/type1/fr.html", true)
        .asserts.visible(".servicecomponent", true)
    );
