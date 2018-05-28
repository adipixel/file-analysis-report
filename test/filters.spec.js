describe('Filters ->', function(){
	describe('Filter: filename -> ', function () {
		var filename;
		beforeEach(module('llMainPage'))
		beforeEach(inject(function(_filenameFilter_) {
			filename = _filenameFilter_;
		}));


		it('Should return only the filename', function () {
			expect(filename('c:\\windows\\directory\\desktop.ini')).toBe('desktop.ini') //pass
		})

		it('Should return immediate folder name', function () {
			expect(filename('c:\\windows\\directory\\history\\')).toBe('history\\') //pass
		})

		it('Should return filename', function () {
			expect(filename('desktop.ini')).toBe('desktop.ini') //pass
		})
	})

	describe('Filter: unixDate -> ', function () {
		var unixDate;
		beforeEach(module('llMainPage'))
		beforeEach(inject(function(_unixDateFilter_) {
			unixDate = _unixDateFilter_;
		}));

		it('Should return unix style date', function () {
			expect(unixDate('2015-11-11 11:25:50.95758')).toBe(1447259150957) //pass
		})

	})
})