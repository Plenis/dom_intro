describe('radio-bill tests' , function(){

    it('should return total amount for call when call bill type is chosen and added', function(){
        var instance = RadioButtonBill();
        instance.radioBill('call')
        instance.radioBill('call')
        assert.equal(instance.getCallTotal(), '5.50')
    })
        
    it('should return total amount for sms when sms bill type is chosen and added', function(){
        var instance = RadioButtonBill();
        instance.radioBill('sms')
        assert.equal(instance.getSmsTotal(), '0.75')
    })

    it('should return total amount for sms and calls added', function(){
        var instance = RadioButtonBill();
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('sms')
        assert.equal(instance.getBillTotal(), '7.75')
    })
    
    it('should return orange when the warning level reaches R30 or more', function(){
        var instance = RadioButtonBill()
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call')
        assert.equal(instance.getBillTotal(), '30.50');
    })

        it('should return red when the critical level reaches R50 or more', function(){
        var instance = RadioButtonBill()
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('sms')
        instance.radioBill('sms')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('sms')
        instance.radioBill('sms')
        instance.radioBill('call')
        instance.radioBill('call')
        instance.radioBill('call') 
        assert.equal(instance.getBillTotal(), '55.75');
    })
     });