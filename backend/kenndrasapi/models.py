from django.db import models

class genmeds(models.Model):
    Shop_id = models.CharField(max_length=100)
    District = models.CharField(max_length=50)
    Address = models.CharField(max_length=250)
    Latitude = models.FloatField()
    Longitude = models.FloatField()
    Pincode = models.FloatField()
    Vendor_Name = models.CharField(max_length=250)

    class Meta:
        db_table = "kendrasapi_kendras"
        managed = True

    def __str__(self):
        return self.Shop_id
