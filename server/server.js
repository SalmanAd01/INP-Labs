const express = require('express');
const app = express()
const PORT = 8700;
const cors = require('cors')

app.use(cors())
app.get('/api/user', (req, res) => {
	res.json({
		data : [
			{ 'name': 'Ryan Dhal', 'rollNo': 43, 'imageUrl': 'https://media-exp1.licdn.com/dms/image/C5612AQHLBVdrBxdNcw/article-inline_image-shrink_1000_1488/0/1528521077893?e=1667433600&v=beta&t=rDaKMyW4VmW4Zpfw959qSe6LsDsiZr-MSDXkI2khlDQ' },
			{ 'name': 'Linus Torvalds', 'rollNo': 53, 'imageUrl': 'https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg' },
			{ 'name': 'aaron swartz', 'rollNo': 63, 'imageUrl': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i1Kf_he75Yy4/v1/1200x-1.jpg' }

		]
	})
})

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`)
})
