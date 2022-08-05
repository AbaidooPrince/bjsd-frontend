<template>
  <div class="h-100">
    <v-carousel cycle height="100%" :show-arrows="false">
      <v-sheet height="95vh">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img height="100%" class="shrink" :src="item.src">
          <!-- <v-row align="center" justify="center" class="pa-8" style="height: 80vh;">
      <v-col cols="12" md="4" lg="6" sm="12" class="banner-text">
        <div align="center">
        <div class="ma-lg-4 text-h3">
         {{ item.text }}
        </div>
        <div>
          <v-btn width="150" rounded>
            Enroll
          </v-btn>
        </div>
        </div>
      </v-col>
    </v-row> -->
        </v-img>
      </v-carousel-item>
      </v-sheet>
    </v-carousel>
    <v-sheet height="70vh">
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="12" md="12">
            <!-- <h2 class="text-h3">What you will learn</h2> -->
          </v-col>
          <v-col cols="12" md="4">
            <v-card flat outlined tile class="mx-auto">
              <v-img
                class="white--text align-end"
                height="150px"
                src="../assets/cool.png"
              >
                <v-card-title>All Applicants</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                <!-- Number 10 -->
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-btn color="orange" text>
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card flat outlined tile class="mx-auto">
              <v-img
                class="white--text align-end"
                height="150px"
                src="../assets/cool2.png"
              >
                <v-card-title>Frontend Option</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                <!-- Number 10 -->
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-btn color="orange" text>
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card flat outlined tile class="mx-auto">
              <v-img
                class="white--text align-end"
                height="150px"
                src="../assets/cool3.png"
              >
                <v-card-title>Backend Option</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                <!-- Number 10 -->
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions class="">
                <div class="">
                <v-btn right color="orange" text>
                  Apply
                </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- <v-sheet height="70vh"> </v-sheet> -->
    <v-sheet color="grey lighten-4 py-8">
      <v-container id="register">
        <v-form @submit.prevent="register">
        <v-row
          align="center"
          class="pa-lg-12"
          style="width: 75%; margin-left: auto; margin-right:auto;"
        >
          <v-col cols="12">
            <v-card-title class="">Registration Form</v-card-title>
          </v-col>
          <v-col cols="12" lg="6" class="py-0">
            <label class="subtitle font-weight-bold">First Name</label>
            <v-text-field v-model="registerStudent.firstName" class="rounded-0" dense outlined> </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" class="py-0">
            <label class="subtitle font-weight-bold">Last Name</label>
            <v-text-field v-model="registerStudent.lastName" class="rounded-0" dense outlined>
            </v-text-field> </v-col
          >
          <v-col cols="12" lg="6" class="py-0">
            <label class="subtitle font-weight-bold">Email</label>
            <v-text-field v-model="registerUser.email"
            :rules="[required('Email')]"
            class="rounded-0" dense outlined> </v-text-field>
          </v-col>
          <v-col cols="12" lg="6" class="py-0">
            <label class="subtitle font-weight-bold">Phone</label>
            <v-text-field v-model="registerStudent.phone" class="rounded-0" dense outlined> </v-text-field>
          </v-col>
          <v-col cols="12" lg="8" class="py-0">
            <label class="subtitle font-weight-bold">Chose an option:</label>
            <div>
              <small
                >Chose <b>frontend</b> if you are interested in VueJs and
                <b>backend</b> if your interest is in NodeJs</small
              >
            </div>
            <v-radio-group v-model="registerStudent.option" class="mt-0" row>
              <v-radio :value="true" label="Frontend"> </v-radio>
              <v-radio :value="false" label="Backend"> </v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" lg="8" class="py-0">
            <label class="subtitle font-weight-bold"
              >Select preferred class hours</label
            >
            <div>
              <small
                >We would like to know when you would be prefer class sessions
                are held.</small
              >
            </div>
            <v-select v-model="registerStudent.classHours" class="rounded-0" dense :items="preferredHours" outlined>
            </v-select>
          </v-col>
          <v-col cols="12" lg="8" class="py-0">
            <label class="subtitle font-weight-bold"
              >Select your Javascript level</label
            >
            <div>
              <small
                >Freely tell us your level of expertise when it comes to
                javascript. You can express further in the
                <i>Other Information</i> field.</small
              >
            </div>
            <v-select v-model="registerStudent.javascriptLevel" class="rounded-0" dense :items="level" outlined>
            </v-select>
          </v-col>
          <v-col cols="12" lg="8" class="py-0">
            <label class="subtitle font-weight-bold"
              >Zoom or Google Meet?</label
            >
            <div>
              <small
                >Do you prefer to use Zoom or Google Meet for class
                sessions</small
              >
            </div>
            <v-select v-model="registerStudent.video" class="rounded-0" dense :items="video" outlined>
            </v-select>
          </v-col>
          <v-col cols="12" lg="12" class="py-0">
            <label class="subtitle font-weight-bold">Other information:</label>
            <div>
              <small
                >If there are other information you would like your trainers to
                know, send them here.</small
              >
            </div>
            <v-textarea v-model="registerStudent.otherInformation" auto-grow class="rounded-0" rows="4" dense outlined>
            </v-textarea>
          </v-col>
          <v-col cols="12" lg="12" class="py-0">
            <label class="subtitle font-weight-bold"
              >Your expectation for this training:</label
            >
            <v-textarea v-model="registerStudent.expectation" auto-grow class="rounded-0" rows="4" dense outlined>
            </v-textarea>
          </v-col>
          <v-col class="text-center" cols="12" md="12">
            <v-btn type="submit" outlined width="250" rounded>
              Register
            </v-btn>
          </v-col>
        </v-row>
        </v-form>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Api from '../Services/api'
import validation from '../Services/validation'
// import VueHtmlEditor from 'vue-html-editor'
export default {
  name: 'HomePage',
  components: {},
  data () {
    return {
      ...validation,
      // eslint-disable-next-line no-undef
      registerUser: new Form({
        username: '',
        email: '',
        password: 'P@$$w0rd.123',
        role: '1'
      }),
      // eslint-disable-next-line no-undef
      registerStudent: new Form({
        firstName: '',
        lastName: '',
        phone: '',
        option: '',
        classHours: '',
        javascriptLevel: '',
        video: '',
        otherInformation: '',
        expectation: '',
        users_permissions_user: ''
      }),
      video: ['Zoom', 'Google Meet'],
      text: 'Hello World!',
      level: [
        'Beginner',
        'Between Beginner and Intermediate',
        'Intermediate',
        'Above Intermediate'
      ],
      preferredHours: ['Morning', 'Afternoon', 'Evening'],
      items: [
        {
          src: require('../assets/upskill.jpg'),
          text: 'Skill-up with our Javascript Developer sessions. '
        },
        {
          src: require('../assets/handson.jpg'),
          text: 'Practical sessions to speed your expertise on how things work'
        },
        {
          src: require('../assets/project.jpg'),
          text:
            'Experience real-world agile software development with your team'
        }
      ]
    }
  },
  methods: {
    register () {
      this.registerUser.username = this.registerStudent.firstName + this.registerStudent.lastName
      Api().post('/auth/local/register', this.registerStudent).then((response) => [
      ])
    }
  }
}
</script>

<style scoped>
.option {

  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.banner-text {
}
</style>
