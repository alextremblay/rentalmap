var spalist = Vue.component("List", {
  template: `
    <div>
        <div v-for="listing in listings" class="col-lg-12">
            <!-- Product 2 -->
            <div class="card product-card mb-4">
                <!-- Content -->
                <div class="card-body p-3 pos-relative row">
                <!-- Image content -->
                <div class="col-md-4 mb-2 mb-md-0">
                    <a v-bind:href='listing["url"]' target="_blank">
                        <v-img :src="listing['image-url']" aspect-ratio="1.7"></v-img>
                    </a>
                </div>
                <!-- Product details -->
                <div class="col-md-8 d-flex flex-column align-items-start">
                    <h4 class="card-title mb-2">
                    <a v-bind:href='listing["url"]' target="_blank" class="text-grey-dark">
                        {{ listing["street-number"] + " " + listing["street-name"] + ", " + listing["city"] }}
                    </a>
                    </h4>
                    <p class="font-weight-bold">$ {{ listing['price']+"0" }}</p>
                    <p class="text-muted text-s">
                    <em>Bedrooms:</em> {{ listing["bedrooms"] }} <span v-if="listing['bedrooms-partial']">½</span> |
                    <em>Bathrooms:</em> {{ listing["bathrooms"] }} <span v-if="listing['bathrooms-partial']">½</span> |
                    <em>Pet Policy:</em> {{ listing["pet-policy"] }}
                    </p>
                    <p class="text-muted text-xs">
                    <em>Distance to my work (transit):</em> {{ listing["points-of-interest"][1]["transit"]["time"] }}
                    </p>
                    <p class="text-muted text-xs">
                    <em>Distance to Yoshi's work (driving):</em> {{ listing["points-of-interest"][2]["drive"]["time"] }}
                    </p>
                    <p class="text-muted text-xs">
                    <em>Distance to Emma's daycare (transit):</em> {{ listing["points-of-interest"][3]["transit"]["time"] }}
                    </p>
                    <p class="text-muted text-xs">
                    <em>Distance to Emma's daycare (driving):</em> {{ listing["points-of-interest"][3]["drive"]["time"] }}
                    </p>
                    <p class="text-muted text-xs">
                    <em>Distance to <a v-bind:href="listing['nearest_costco']['url']">Nearest Costco</a> (driving):</em> {{ listing["points-of-interest"][0]["drive"]["time"] }}
                    </p>
                    <div class="mt-auto">
                    <a v-bind:href='listing["url"]' target="_blank" class="btn btn-primary btn-sm"><i class="fa fa-chevron-circle-right mr-2"></i> Visit Listing Page</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
`,
  props: ["listings"],
  $_veeValidate: {
      validator: "new"
  }
});