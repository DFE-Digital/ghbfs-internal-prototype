const { data } = require('jquery')
const _ = require('lodash')

module.exports = router => {

  router.post('/support/start', (req, res) => {
    res.redirect('/support/energy-request')
  })

  router.post('/support/energy-request', (req, res) => {
    if(req.session.data['energy-request'] == 'yes') {
      res.redirect('/support/energy-request-about')
    } else {
      //req.session.data['bill'] = "no"
      res.redirect('/support/choose-signin')
    }
  })

  router.post('/support/energy-request-about', (req, res) => {
    if(req.session.data['energy-request'] == 'yes') {
      res.redirect('/support/energy-bill')
    } else {
      //req.session.data['bill'] = "no"
      res.redirect('/support/choose-signin')
    }
  })

  router.post('/support/energy-bill', (req, res) => {
    if(req.session.data['have-energy-bill'] == 'yes') {
      res.redirect('/support/choose-signin')
    } else {
      res.redirect('/support/energy-another-way')
    }
  })

  router.post('/support/choose-signin', (req, res) => {
    if(req.session.data['signin'] == 'dsi') {
      res.redirect('/support/sign-in')
    } else {
      res.redirect('/support/what-type-school')
    }
  })

  router.post('/support/sign-in', (req, res) => {
    res.redirect('/support/check-details')
  })

  router.post('/support/check-details', (req, res) => {
    res.redirect('/support/choose-school')
  })

  router.post('/support/choose-school', (req, res) => {
    if(req.session.data['have-energy-bill'] == 'yes') {
      res.redirect('/support/upload-your-bill')
    } else {
      res.redirect('/support/enter-problem-description')
    }
  })

  router.post('/support/upload-your-bill', (req, res) => {
    res.redirect('/support/uploading-your-bill')
  })

  router.post('/support/bills-uploaded', (req, res) => {
    res.redirect('/support/enter-problem-description')
  })

  router.post('/support/enter-problem-description', (req, res) => {
    if(req.session.data['have-energy-bill'] == 'yes') {
      res.redirect('/support/bought-before')
    } else {
      res.redirect('/support/how-much')
    }
  })

  router.post('/support/bought-before', (req, res) => {
    res.redirect('/support/framework-before')
  })

  router.post('/support/framework-before', (req, res) => {
    if(req.session.data['used-framework-before'] == 'yes') {
      res.redirect('/support/how-confident')
    } else {
      res.redirect('/support/special-requirement')
    }
  })

  router.post('/support/how-confident', (req, res) => {
    res.redirect('/support/special-requirement')
  })

  router.post('/support/special-requirement', (req, res) => {
    res.redirect('/support/check-your-answers')
  })

  router.post('/support/check-your-answers', (req, res) => {
    res.redirect('/support/confirmation')
  })

/*
  router.post('/report/your-organisation/address', (req, res) => {
    res.redirect('/report/your-organisation/check-answers')
  })

  router.post('/report/your-organisation/check-answers', (req, res) => {
    res.redirect('/report')
  })
*/
}
